interface EditButtonProps {
  setIsEditing: () => void;
}

export function EditButton(props: EditButtonProps) {
  return (
    <button
      onClick={() => props.setIsEditing()}
      className="w-6 h-6 bg-contain bg-no-repeat  bg-[url('src/assets/pencil.png')]   bg-center 
      focus:bg-[url('src/assets/pencil-focus.png')] align-bottom outline-none
      "
    />
  );
}
