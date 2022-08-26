//buttons comes with three variants: text(default), contained,outlined
import {Stack, Button} from '@mui/material'
export const MUIButtons = () => {

    
    return (
    <>
<Stack spacing={4}>
    <Button variant='text'>click me(i'm text variant)</Button>
    <Button variant='contained'>click me(i'm contained variant)</Button>
    <Button variant='outlined'>click me(i'm outlined variant)</Button>

    {/* if you want to link the button to url  */} <br />
  <Button variant='text' href='https://mui.com/material-ui/react-button/#main-content'>material ui docs</Button>
  </Stack>
{/* choose colors as per your prefrence */}

<Stack spacing={4} direction='row'>
<Button variant='contained' color='primary'>primary</Button>
<Button variant='contained' color='secondary'>secondary</Button>
<Button variant='contained' color='success'>success</Button>
<Button variant='contained' color='error'>error</Button>
<Button variant='contained' color='info'>info</Button>
<Button variant='contained' color='warning'>warning</Button>
</Stack>

<Stack display='block' spacing={2} direction='row'>
<Button variant='contained' size='small'>small</Button>
</Stack>










    </>
  )
}
