import "./Button.module.css";

export type ButtonProps = {
  primary: boolean;
  label: string;
};

function Button({ primary, label, ...props }: ButtonProps) {
  return (
   <button className={`btn ${primary ? "primary" : ""}`} {...props}>
      {label}
    </button>
  );
}

export default Button;
