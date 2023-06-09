import './App.css';
import Button, {ButtonGroup, LoadingButton} from '@atlaskit/button';
import TextField from '@atlaskit/textfield';
import Form, {Field, FormFooter} from "@atlaskit/form";
import {useState} from "react";
import CurrentFlag from "./CurrentFlag";
import '@atlaskit/css-reset';




function App() {
  const [login, setLogin] = useState(0);


  const UsernameField = () => (
      <Field
          aria-required={true}
          name="username"
          defaultValue=""
          label="Username"
          isRequired
      >
        {({ fieldProps, error, valid }) => <TextField {...fieldProps} />}
      </Field>
  );
  const PasswordField = () => (
      <Field
          name="password"
          defaultValue=""
          label="Password"
          isRequired
      >
        {({fieldProps, error, valid}) => <TextField {...fieldProps} />}
      </Field>
  )

  const Login = (username, password) =>{
    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    })
        .then(res => res.json())
        .then(res => {
          if(res.message == "Invalid credentials"){
            setLogin(false)
          }else{
            setLogin(true)
          }
        })
  }

  return (
      <div className="login-box">
        <Form
            onSubmit={(data) => {
              { Login(data.username, data.password)}
              return new Promise((resolve) => setTimeout(resolve, 100)).then(() =>
                  login === false ? { username: 'IN_USE', password: 'IN_USE' } : undefined,
              );
            }}
        >
          {({ formProps, submitting }) => (
              <form {...formProps}>
                {login === false ? <CurrentFlag type="error" /> : login === true ? <CurrentFlag type="success" /> : undefined}
                <UsernameField />
                <PasswordField/>
                <FormFooter>
                  <ButtonGroup>
                    <Button appearance="subtle">Cancel</Button>
                    <LoadingButton
                        type="submit"
                        appearance="primary"
                        isLoading={submitting}
                    >
                      Submit
                    </LoadingButton>
                  </ButtonGroup>
                </FormFooter>
              </form>
          )}
        </Form>
      </div>

  )
}

export default App;
