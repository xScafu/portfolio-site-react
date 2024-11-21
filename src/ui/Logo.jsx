export default function Logo() {
  let lightMode = true;
  if (lightMode === true) {
    return <img src="../ASG LOGO.svg" alt="logo" className="w-14" />;
  } else {
    return <div></div>;
  }
}
