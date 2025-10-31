import Image from "next/image";

export const Icon = ({ ...props }) => {
  const {
    icon
  } = props;

  if (icon) {
    return <Image src={props.icon} width={12} height={12} alt="" />
  }
}
