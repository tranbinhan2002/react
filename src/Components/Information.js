import React, { Component } from 'react';

class Information extends Component {
    render() {
        return (
            <div className="row contact">
                <div className="col-md footer-below">
                    <div className="contact"> Contact </div>
                    <div className="info">
                        <p> <i className="fa fa-map-marker" aria-hidden="true"></i> 53 Vo Van Ngan, p.Linh Chieu, q.Thu Duc, tp.HCM</p>
                        <p><i className="fa fa-phone-square" aria-hidden="true"></i> 0397.043.536</p>
                    </div>
                </div>
                <div className="col-md footer-below">
                    <div className="contact "> Connect </div>
                    <div className="facebook">
                    <a href="https://www.facebook.com/profile.php?id=100007828444094"><i className="fa fa-facebook-square" aria-hidden="true"></i> Facebook</a>
                    </div>
                </div>
                <div className="col-md footer-below">
                    <div className="contact"> payment method </div>
                    <div className="card-pay">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRY82RFNO3VI8JN0X67KOAE0ohw2INnPvfK1w&usqp=CAU" alt=""/>
                    <img src="https://f1.pngfuel.com/png/28/420/953/visa-mastercard-logo-bank-icon-card-icon-credit-icon-debit-icon-mastercard-icon-zanskar-brand-png-clip-art.png" alt=""/>
                    <img src="https://img.favpng.com/14/9/7/business-icon-id-card-icon-pass-icon-png-favpng-j7BFTRM9h7HCg5PCyxmSDJAdx.jpg" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Information;