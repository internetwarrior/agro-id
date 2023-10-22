import React from "react";
import { Box, FormControl, Icon, ListItemIcon, ListItemText, MenuItem, Select } from "@mui/material";
import scss from "../../post/Post.module.scss";
import hello from "../../../static/svg/IconBook.svg";

const SelectApp = ({ ...props }) => {
  return (
    <div>
      <div className={scss.customSelect}>
        <FormControl className={scss.select}>
          <Select
            // labelId="demo-simple-select-label"
            className="h-[32px] px-6 py-6"
            id={props.id}
            value={props.title}
            onChange={props.onChange}
          >
            <MenuItem value={10}>
              <ListItemIcon>
                <img src={hello} alt="" srcset="" />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </MenuItem>
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
