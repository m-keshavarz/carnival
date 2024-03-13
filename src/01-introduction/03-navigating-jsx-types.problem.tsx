export const Component = () => {
  return (
    <div
      // How do I figure out what type aria-posinset expects?
      aria-posinset={2}
      // How do I figure out what type onChange expects?
      onChange={(e) => {
        console.log('hey')
        return true
      }}

      // How do I get autocomplete with JSX?
    />
  );
};
