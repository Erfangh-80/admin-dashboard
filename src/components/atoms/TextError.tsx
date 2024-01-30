type IProps = {
  textError: string;
};

export const TextError = ({ textError }: IProps) => {
  return <p>{textError}</p>;
};
