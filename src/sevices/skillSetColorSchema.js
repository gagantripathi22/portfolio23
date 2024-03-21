const skillListColorSchemes = [
    {
      background: '#f0f4fb',
      text: '#355eb1'
    },
    {
      background: '#f5f1ff',
      text: '#5a1f9b'
    },
    {
      background: '#fdf4d4',
      text: '#896539'
    },
    {
      background: '#faeaea',
      text: '#ab383e'
    },
    {
      background: '#fce2ed',
      text: '#934f68'
    },
    {
      background: '#edf9ea',
      text: '#5b7655'
    },
    {
      background: '#edf9ea',
      text: '#477e73'
    }
  ]

  export const pickRandomSkillItemColorSchema = () => {
    return skillListColorSchemes[Math.floor(Math.random() * skillListColorSchemes.length)];
  };