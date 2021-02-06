import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { AiFillSmile, AiFillMail, AiFillMessage } from 'react-icons/ai';

const ContactUs = () => {
    return (
        <div className="max-w-2xl m-auto p-4">
            <div>
                <form action="">
                    <div style={{display: 'flex', flexDirection: 'column', gap: '21px'}}>
                        <div className="flex w-full m-auto gap-2 items-center">
                            <Grid item>
                                <AiFillSmile size="24px" />
                            </Grid>
                            <Grid xs={11} item>
                                <TextField
                                    id="name"
                                    label="Name"
                                    fullWidth
                                    variant="outlined"
                                    // value={currency}
                                    // onChange={handleChange}
                                />
                            </Grid>
                        </div>
                        <div className="flex w-full m-auto gap-2 items-center">
                            <Grid item>
                                <AiFillMail size="24px" />
                            </Grid>
                            <Grid xs={11} item>
                                <TextField
                                    id="email"
                                    label="Email"
                                    fullWidth
                                    variant="outlined"
                                    // value={currency}
                                    // onChange={handleChange}
                                />
                            </Grid>
                        </div>
                        <div className="flex w-full m-auto gap-2 items-center">
                            <Grid item style={{ marginTop: '16px' }}>
                                <AiFillMessage size="24px" />
                            </Grid>
                            <Grid xs={11} item>
                                <TextField
                                    id="message"
                                    label="Message"
                                    fullWidth
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    // value={currency}
                                    // onChange={handleChange}
                                />
                            </Grid>
                        </div>
                        <Button style={{width: 'fit-content', marginLeft: '32px', padding: '4px 28px'}} size="medium" variant="outlined">Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
