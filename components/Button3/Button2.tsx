import "./Button2.module.css";

export type ButtonProps2 = {
  primary: boolean;
  label: string;
};

export default function Button2({ primary, label, ...props }: ButtonProps2) {
  return (
    <button className={`btn ${primary ? "primary" : ""}`} {...props}>
      {label}
    </button>
  );
}

// export default Button2;
