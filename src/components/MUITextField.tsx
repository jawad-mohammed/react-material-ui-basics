import { Stack, TextField } from '@mui/material'
export const MUITextField = () => {
  
    return (
    <>
    <Stack spacing={4}>
<Stack direction='row' spacing={2}>
    <TextField label='Name'   variant='outlined'></TextField>
    <TextField label='email'   variant='filled'></TextField>
    <TextField label='role'   variant='standard'></TextField>
 </Stack>


<Stack direction='row' spacing={2}>
<TextField label='Name' size='small'  color='secondary'></TextField>
<TextField label='Form Input' required></TextField>
</Stack>

    </Stack>
    
    
    
    </>
  )
}
