import { useState } from "react";
import Input from "../Input";
import { EyeClose, EyeOpen } from "../../icons";
import { handleInputChange } from "../../utils/helper";

const Password = ({
  value,
  setFormData,
  error,
  name,
  classes,
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Input
        className={classes}
        type={showPassword ? "text" : "password"}
        name={name}
        value={value}
        onChange={(e) => handleInputChange(e, setFormData)}
        placeholder={placeholder}
        error={error}
      />
      <span
        className="absolute right-[16px] top-[15px] md:top-[20px] cursor-pointer"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <EyeOpen /> : <EyeClose />}
      </span>
    </>
  );
};

export default Password;
