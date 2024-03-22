const skillListColorSchemes = [
    {
      id: 1,
      background: '#f0f4fb',
      text: '#355eb1'
    },
    {
      id: 2,
      background: '#f5f1ff',
      text: '#5a1f9b'
    },
    {
      id: 3,
      background: '#fdf4d4',
      text: '#896539'
    },
    {
      id: 4,
      background: '#faeaea',
      text: '#ab383e'
    },
    {
      id: 5,
      background: '#fce2ed',
      text: '#934f68'
    },
    {
      id: 6,
      background: '#edf9ea',
      text: '#5b7655'
    },
    {
      id: 7,
      background: '#dcf7f1',
      text: '#477e73'
    }
  ]

  let tempColorSchema = skillListColorSchemes.slice();
  export const pickRandomSkillItemColorScheme = () => {
    const randomIndex = Math.floor(Math.random() * tempColorSchema.length);
    const tempRandomIndex = tempColorSchema[randomIndex];

    if (tempRandomIndex !== undefined) {
      if(tempColorSchema.length <= 1) tempColorSchema = skillListColorSchemes.slice() // Reducing concurrent selection of the same random scheme
        const deepCopy = JSON.parse(JSON.stringify(tempRandomIndex));
        tempColorSchema.splice(randomIndex, 1);
        return deepCopy;
    } else {
        console.error("tempRandomIndex is undefined");
    }
  };