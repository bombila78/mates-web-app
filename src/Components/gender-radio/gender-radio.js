import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const GenderRadio = () => {
    const [value, setValue] = React.useState('Female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <FormControl margin="normal" component="fieldset">
            <FormLabel component="legend">Пол</FormLabel>
            <RadioGroup row aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="Female" control={<Radio />} label="Женский" />
                <FormControlLabel value="Male" control={<Radio />} label="Мужской" />
            </RadioGroup>
        </FormControl>
    );
}

export default GenderRadio;