export const handleFixFilePath = async (
  files: FileList | null | undefined
): Promise<string | null | undefined> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    if (files && files.length > 0) {
      const file = files[0];
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        resolve(e.target?.result as string);
      };
    } else {
      resolve('');
    }
  });
};
