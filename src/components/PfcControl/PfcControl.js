import React from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { Button } from '@material-ui/core';

const PfcControl = () => {
    let passed = { color: 'black', backgroundColor: '#40AF48', opacity: false ? 1 : 0.4 };
    let caution = { color: 'black', backgroundColor: '#E8A543', opacity: false ? 1 : 0.4 };
    let failed = { color: 'black', backgroundColor: '#B20909', opacity: true ? 1 : 0.4 };
    let na = { color: 'black', backgroundColor: '#31B0D5', opacity: false ? 1 : 0.4 };

    const changed = (event, value) => {
        console.log(value);
        switch (value[0]) {
            case 'Pass':
                passed.opacity = 1;
                break;
            default:
        }
    };

    return (
        <div>
            <Button variant="contained" color="secondary">
                Test
            </Button>
            <ToggleButtonGroup onChange={changed}>
                <ToggleButton variant="contained" color="test" value="Pass">
                    Pass
                </ToggleButton>
                <ToggleButton style={caution} value="Caution" selected={true}>
                    Caution
                </ToggleButton>

                <ToggleButton style={failed} value="Fail">
                    Fail
                </ToggleButton>
                <ToggleButton style={na} value="N/A">
                    N/A
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
};

export default PfcControl;
