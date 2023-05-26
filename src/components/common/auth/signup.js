import React, { useState } from 'react'
import Modal from 'react-modal'
import styles from "./auth.module.scss"
import PerfectScrollbar from 'react-perfect-scrollbar'
import { customStyles } from './customStyles'
import { Formik, Form, ErrorMessage, Field } from 'formik'
import { initialSignupValues, validationSignupSchema } from '@/schemas/authSchema'
import CustomInput from './CustomInput'

export default function Signup({ isRegisterModalOpen, registerCloseModal }) {
    return (
        <Modal
            className="loginRegisterPopup"
            isOpen={isRegisterModalOpen}
            onRequestClose={registerCloseModal}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}

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
                            <Formik initialValues={initialSignupValues}
                                validationSchema={validationSignupSchema}
                                onSubmit={(values, actions) => {
                                    setTimeout(() => {
                                        console.log(JSON.stringify(values, null, 2));
                                        actions.setSubmitting(false);
                                    }, 1000);
                                }}>
                                {() => (
                                    <Form>
                                        <div className="courtiersDfltForm">
                                            <div className="dfltFormRow">
                                                <div className="twoClmForm">
                                                    <CustomInput
                                                        name="firstName"
                                                        type="text"
                                                        placeholder="Enter First Name"
                                                    />
                                                </div>
                                                <div className="twoClmForm">
                                                    <CustomInput
                                                        name="lastName"
                                                        type="text"
                                                        placeholder="Enter Last Name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="oneClmForm">
                                                <CustomInput
                                                    name="email"
                                                    type="email"
                                                    placeholder="Enter your Email"
                                                />
                                            </div>
                                            <div className="oneClmForm">
                                                <CustomInput
                                                    name="password"
                                                    type="password"
                                                    placeholder="Enter Password"
                                                />
                                            </div>
                                            <div className="oneClmForm">
                                                <CustomInput
                                                    name="confirmPassword"
                                                    type="password"
                                                    placeholder="Confirm Your Password"
                                                />
                                            </div>
                                            <div className="dfltFormRow">
                                                <div className="twoClmForm">
                                                    <CustomInput
                                                        name="civic"
                                                        type="text"
                                                        placeholder="Enter Civic"
                                                    />
                                                </div>
                                                <div className="twoClmForm">
                                                    <CustomInput
                                                        name="street"
                                                        type="text"
                                                        placeholder="Enter Street Name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="dfltFormRow">
                                                <div className="threeClmForm">
                                                    <CustomInput
                                                        name="city"
                                                        type="text"
                                                        placeholder="Enter Your City"
                                                    />
                                                </div>
                                                <div className="threeClmForm">
                                                    <CustomInput
                                                        name="province"
                                                        type="text"
                                                        placeholder="Province"
                                                    />
                                                </div>
                                                <div className="threeClmForm">
                                                    <CustomInput
                                                        name="postalCode"
                                                        type="text"
                                                        placeholder="Postal Code"
                                                    />
                                                </div>
                                            </div>
                                            <div className="oneClmForm">
                                                <Field as="select"
                                                    name="accountType"
                                                >
                                                    <option value="">Type of Account</option>
                                                    <option value="oranges">Outrageous Oranges</option>
                                                    <option value="tomatoes">Technically a Fruit Tomatoes</option>
                                                    <option value="bananas">Bodacious Bananas</option>
                                                </Field>
                                                <ErrorMessage className={styles.errorMsg} name="accountType" component="div" />
                                            </div>
                                            <div className="radioCheckRow">
                                                <p className="titleHdn">What is your goal ?</p>
                                                <ul>
                                                    <li>
                                                        <Field value="buy" type="checkbox" name="goal" id="goal_item1" />
                                                        <label for="goal_item1">Buy</label>
                                                    </li>
                                                    <li>
                                                        <Field value="sell" type="checkbox" name="goal" id="goal_item2" />
                                                        <label for="goal_item2">Sell</label>
                                                    </li>
                                                    <li>
                                                        <Field value="sell-buy" type="checkbox" name="goal" id="goal_item3" />
                                                        <label for="goal_item3">Sell and buy after</label>
                                                    </li>
                                                    <li>
                                                        <Field value="others" type="checkbox" name="goal" id="goal_item4" />
                                                        <label for="goal_item4">Other</label>
                                                    </li>
                                                </ul>
                                                <ErrorMessage className={styles.errorMsg} name="goal" component="div" />

                                            </div>
                                            <div className="radioCheckRow">
                                                <p className="titleHdn">Within</p>
                                                <ul>
                                                    <li>
                                                        <Field type="radio"
                                                            name="duration" id="within_item1" value="0-3 months" />
                                                        <label for="within_item1">0-3 months</label>
                                                    </li>
                                                    <li>
                                                        <Field type="radio"
                                                            name="duration" id="within_item2"
                                                            value="4-6 months"
                                                        />
                                                        <label for="within_item2">4-6 months</label>
                                                    </li>
                                                    <li>
                                                        <Field type="radio"
                                                            name="duration" id="within_item3"
                                                            value="7 months or more"

                                                        />
                                                        <label for="within_item3">7 months or more</label>
                                                    </li>
                                                </ul>

                                                <ErrorMessage className={styles.errorMsg} name="duration" component="div" />

                                            </div>
                                            <div className="oneClmForm">
                                                <button className="flWidthOrngSubmit" type="submit">Submit</button>
                                            </div>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </PerfectScrollbar>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
