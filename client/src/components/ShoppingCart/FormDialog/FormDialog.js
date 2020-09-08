import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import './FormDialog.css'
import axios from 'axios'

import jwt from 'jsonwebtoken'

export default function FormDialog({ products, discounts, total, clearCart }) {

    const decodedClientData = jwt.decode(localStorage.getItem('jwtToken'));

    const { userId, prenume, nume, email, grupClient, nrComenzi } = decodedClientData;

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async () => {

        let pretTotal = parseFloat(total);
        const order = {
            produse: products.map((item) => { return { prod_id: item.sku, count: item.quantity } }),
            pret_total: pretTotal,
            data: '2002-12-09',
            durata: 34,
            transport: 'ridicare sediu',
            metoda_plata: 'cash',
            client: userId,
            reducere: []
        }
        let res = await axios.post(`https://randomname.life/api/v1/orders/`, order);

        clearCart();
        setOpen(false);
        document.querySelector('#weirdSpan').innerHTML = '0'


    }

    return (
        <div>
            <button onClick={handleClickOpen}>
                Ridicare sediu
      </button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Sumar comanda</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <div className='prod-summary'>                        <div className='fullName'>{prenume.charAt(0).toUpperCase() + prenume.slice(1)} {nume.charAt(0).toUpperCase() + nume.slice(1)}</div>
                            {
                                products.map((item, idx) => {
                                    const { sku, name, price, quantity, totalPrice } = item;
                                    return (
                                        <div style={{ 'marginBottom': '19px' }}><span style={{ 'fontWeight': 'bold', 'color': 'black' }}>Produs:</span> {name.split(' ').filter((item, index) => index < 5).join(' ')} <span style={{ 'fontWeight': 'bold', 'color': 'black' }}>x{quantity} </span> -- <span style={{ 'fontWeight': 'bold', 'color': 'black' }}>{totalPrice}</span></div>
                                    )
                                })
                            }
                        </div>

                        <div><span style={{ 'fontWeight': 'bold', 'color': 'black' }}>Discount-uri aplicate:</span> none</div>
                        <div style={{ 'marginBottom': '10px' }}><span style={{ 'fontWeight': 'bold', 'color': 'black' }}>PRET FINAL:</span> {total}lei</div>
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Nr. telefon"
                        type="email"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color='primary' >
                        Renunta
          </Button>
                    <Button onClick={handleSubmit} style={{ 'color': '#1e88e5', 'fontWeight': 'bold' }}>
                        Plaseaza comanda
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
