import React from 'react';

import SuccessIcon from '@atlaskit/icon/glyph/check-circle';
import { G400 ,R400, R300} from '@atlaskit/theme/colors';
import { token } from '@atlaskit/tokens';
import Tick from '@atlaskit/icon/glyph/check-circle';
import Error from '@atlaskit/icon/glyph/error';

import {AutoDismissFlag, FlagGroup} from '@atlaskit/flag';
import { AppearanceTypes } from '@atlaskit/flag/types';


function CurrentFlag(prop) {


    const FlagMessages = {

        success:{
            appearance:"success",
            label:"Success",
            id: "Success",
            key: "Success",
            title: "Good job buddy.",
            description:"Now get back to work!",
            content: "Yes Sir!",
            icon: (
                <Tick
                    label="Success"
                    secondaryColor={token('color.background.success.bold', G400)}
                />
            ),

        },
        error:{
            appearance:"error",
            label:"Error",
            id: "Danger",
            key: "Danger",
            title: "Remember your passwords or get out of here peasant!",
            description: "Now try again!",
            content: "OK :(",
            icon: (
                <Error
                    label="Error"
                    secondaryColor={token('color.background.danger.bold', R300)}
                />
            ),
        },
}

    return (
<FlagGroup >
    <AutoDismissFlag
        appearance={FlagMessages[prop.type].appearance}
        icon={FlagMessages[prop.type].icon}
        id={FlagMessages[prop.type].id}
        key={FlagMessages[prop.type].key}
        title={FlagMessages[prop.type].title}
        description={FlagMessages[prop.type].description}
    />
</FlagGroup>

    );
};

export default CurrentFlag;