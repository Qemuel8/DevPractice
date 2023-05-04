import React from 'react';

import SuccessIcon from '@atlaskit/icon/glyph/check-circle';
import { G400 } from '@atlaskit/theme/colors';
import { token } from '@atlaskit/tokens';

import Flag from '@atlaskit/flag';

const GreenFlag = () => {
    return (
        <Flag
            appearance="success"
            icon={
                <SuccessIcon
                    label="Success"
                    secondaryColor={token('color.background.success.bold', G400)}
                />
            }
            id="success"
            key="success"
            title="Login successful kind sir."
            description="Now get back to work!"
            actions={[{ content: 'Yes sir!'}]}
        />
    );
};

export default GreenFlag;