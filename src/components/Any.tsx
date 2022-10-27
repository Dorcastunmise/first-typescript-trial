const Any = () => {
//any disables type checking
  let v: any = true;
  v = "string";
  Math.round(v);

  return (
    <div>Any</div>
  );
};

export default Any;