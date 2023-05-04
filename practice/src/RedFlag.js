import React from 'react';

import ErrorIcon from '@atlaskit/icon/glyph/warning';
import { R400, Y200 } from '@atlaskit/theme/colors';
import { token } from '@atlaskit/tokens';

import Flag from '@atlaskit/flag';

const RedFlag = () => {
    return (
        <Flag
            appearance="error"
            icon={

            <ErrorIcon
                label="Error"
                secondaryColor={token('color.background.danger.bold', R400)}
                />

            }
            id="danger"
            key="danger"
            title="Remember your passwords or get out of here peasant!"
            description="Try again!"
            actions={[
                {content: "Fine" }
            ]}
            />
    );
};

export default RedFlag;