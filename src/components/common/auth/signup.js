import React, { useState } from 'react'
import Modal from 'react-modal'
import styles from "./auth.module.scss"
import PerfectScrollbar from 'react-perfect-scrollbar'
import { customStyles } from './customStyles'

export default function Signup({isRegisterModalOpen, registerCloseModal}) {
    return (
        <Modal
            className="loginRegisterPopup"
            isOpen={isRegisterModalOpen}
            onRequestClose={registerCloseModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className={styles.loginRegisterPopupRow}>
                <div className={styles.registerPopupLeftPrt}>
                    <img src={"../../../assets/images/register-image.jpg"} />
                    <div className={styles.changeItBtn}>
                        <a href="#">Change it</a>
                    </div>
                </div>
                <div className={`${styles.registerRightFormBg} ${styles.loginRegisterPopupRightFormPrt}`}>
                    <div className={styles.loginRegisterPopupHdnPrt}>
                        <a className={styles.loginRegisterPopupCloseIcon} onClick={registerCloseModal}>
                            <img src={"../../../assets/images/close-icon.png"} />
                        </a>
                        <h2>Register</h2>
                    </div>
                    <div className={styles.loginRegisterForm}>
                        <PerfectScrollbar
                            className="loginRegisterPopupHeight"
                        >
                            <form>
                                <div className="courtiersDfltForm">
                                    <div className="dfltFormRow">
                                        <div className="twoClmForm">
                                            <input className="dfltFormField" type="text" placeholder="First name" name="" />
                                        </div>
                                        <div className="twoClmForm">
                                            <input className="dfltFormField" type="text" placeholder="Last name" name="" />
                                        </div>
                                    </div>
                                    <div className="oneClmForm">
                                        <input className="dfltFormField" type="email" placeholder="Email address" name="" />
                                    </div>
                                    <div className="oneClmForm">
                                        <input className="dfltFormField" type="password" placeholder="Password" name="" />
                                    </div>
                                    <div className="oneClmForm">
                                        <input className="dfltFormField" type="password" placeholder="Confirm Password" name="" />
                                    </div>
                                    <div className="dfltFormRow">
                                        <div className="twoClmForm">
                                            <input className="dfltFormField" type="text" placeholder="Civic #" name="" />
                                        </div>
                                        <div className="twoClmForm">
                                            <input className="dfltFormField" type="text" placeholder="Street Name" name="" />
                                        </div>
                                    </div>
                                    <div className="dfltFormRow">
                                        <div className="threeClmForm">
                                            <input className="dfltFormField" type="text" placeholder="City" name="" />
                                        </div>
                                        <div className="threeClmForm">
                                            <input className="dfltFormField" type="text" placeholder="Province" name="" />
                                        </div>
                                        <div className="threeClmForm">
                                            <input className="dfltFormField" type="text" placeholder="Postal code" name="" />
                                        </div>
                                    </div>
                                    <div className="oneClmForm">
                                        <select>
                                            <option value="Type of Account">Type of Account</option>
                                            <option value="oranges">Outrageous Oranges</option>
                                            <option value="tomatoes">Technically a Fruit Tomatoes</option>
                                            <option value="bananas">Bodacious Bananas</option>
                                        </select>
                                    </div>
                                    <div className="radioCheckRow">
                                        <p className="titleHdn">What is your goal ?</p>
                                        <ul>
                                            <li>
                                                <input type="checkbox" name="goal" id="goal_item1" />
                                                <label for="goal_item1">Buy</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" name="goal" id="goal_item2" />
                                                <label for="goal_item2">Sell</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" name="goal" id="goal_item3" />
                                                <label for="goal_item3">Sell and buy after</label>
                                            </li>
                                            <li>
                                                <input type="checkbox" name="goal" id="goal_item4" />
                                                <label for="goal_item4">Other</label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="radioCheckRow">
                                        <p className="titleHdn">Within</p>
                                        <ul>
                                            <li>
                                                <input type="radio" name="time" id="within_item1" />
                                                <label for="within_item1">0-3 months</label>
                                            </li>
                                            <li>
                                                <input type="radio" name="time" id="within_item2" />
                                                <label for="within_item2">4-6 months</label>
                                            </li>
                                            <li>
                                                <input type="radio" name="time" id="within_item3" />
                                                <label for="within_item3">7 months or more</label>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="oneClmForm">
                                        <button className="flWidthOrngSubmit" type="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </PerfectScrollbar>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
