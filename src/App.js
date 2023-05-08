import React, {useState} from 'react'
import { Grid, TextField, Card, CardContent, Button, Typography, MenuItem, InputLabel, Select, FormControl} from '@mui/material';
import axios from 'axios';

export default function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [postcode, setPostcode] = useState('');
  const [state, setState] = useState('');
  const [clothingTypes, setClothingTypes] = useState('');
  const [description, setDescription] = useState('');
  const [budget, setBudget] = useState('');
  const [images, setImages] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      firstName,
      lastName,
      phoneNumber,
      email,
      address,
      postcode,
      state,
      clothingTypes,
      description,
      budget,
      images
    }
    axios.post('http://localhost:5000/api/v1/contacts', data)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }

    
  return (
<div className="App"> 
      <Typography gutterBottom variant="h3" align="center">
        Meyd.it
       </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Us
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Fill up the form and our team will get back to you within 24 hours.
          </Typography> 
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField required
                    fullWidth
                    label="First Name"
                    name="firstName"
                    size="small"
                    variant="outlined"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required
                    fullWidth
                    label="Last Name"
                    name="lastName"
                    size="small"
                    variant="outlined"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />  
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required
                    fullWidth
                    label="Phone Number"
                    name="phoneNumber"
                    size="small"
                    variant="outlined"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required

                    fullWidth
                    label="Email"
                    name="email"
                    size="small"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField required
                    fullWidth
                    label="Address"
                    name="address"
                    size="small"
                    variant="outlined"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField required
                    fullWidth
                    label="Postcode"
                    name="postcode"
                    size="small"
                    variant="outlined"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth size="small" variant="outlined">
                    <InputLabel>State</InputLabel>
                    <Select
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      label="State" required
                    >
                      <MenuItem value="">     
                        <em>None</em>
                      </MenuItem> 
                      <MenuItem value="vic">vic</MenuItem>
                      <MenuItem value="nsw">nsw</MenuItem>
                      <MenuItem value="qld">qld</MenuItem>
                      <MenuItem value="wa">wa</MenuItem>
                      <MenuItem value="sa">sa</MenuItem>
                      <MenuItem value="tas">tas</MenuItem>
                      <MenuItem value="act">act</MenuItem>
                      <MenuItem value="nt">nt</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth size="small" variant="outlined">
                    <InputLabel>Clothing Types</InputLabel>
                    <Select required
                      value={clothingTypes}
                      onChange={(e) => setClothingTypes(e.target.value)}
                      label="Clothing Types"
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="saree">saree</MenuItem>
                      <MenuItem value="blouse">blouse</MenuItem>
                      <MenuItem value="bottom">bottom</MenuItem>

                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                <input
                  type="file" accept="image/*" multiple
                  onChange={(e) => setImages(e.target.files)}
                />
                </Grid>

                <Grid item xs={12}>
                  <TextField multiline rows={2}
                    fullWidth
                    label="Description"
                    name="description"
                    size="small"
                    variant="outlined"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Budget (Optional)"
                    name="budget"
                    size="small"
                    variant="outlined"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}
                  fullWidth
                  label="Images"
                  name="images"
                  size="small"
                  variant="outlined"
                  value={images}
                  onChange={(e) => setImages(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}



