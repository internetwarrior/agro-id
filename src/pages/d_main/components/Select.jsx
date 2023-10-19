import React from "react";
import { FormControl, MenuItem, Select } from "@mui/material";
import scss from "../../post/Post.module.scss";

const SelectApp = ({...props}) => {
  return (
    <div>
      <div className={scss.customSelect }>
        <FormControl className={scss.select  }>
          <Select
            // labelId="demo-simple-select-label"
            className='h-[32px] px-6 py-6'
            id={props.id}
            value={props.title}
            onChange={props.onChange}
            
            
          >

            {Object.keys(props.dataObject).map((key) => (
              <MenuItem key={key} value={key}>
                {props.dataObject[key]}

              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default SelectApp;
