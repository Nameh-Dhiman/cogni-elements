import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import styles from "./Modal.module.scss";

const Modal = () => {
  return (
    <div className={styles.ModalContainer}>
      <div className={styles.ModalHeader}>
        <div>
          <h2>Add Discount for Garrik's query</h2>
          <p>
            Choose the discount you want to apply for this query. You will see
            the final cost reflected on the Summary being showed taking into
            account the discount you enter.
          </p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-x-lg"
            viewBox="0 0 16 16"
          >
            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
          </svg>
        </div>
      </div>
      <div className={styles.ModalContent}>
        <div className={styles.Form}>
          <div className={styles.FormInfoHeader}>
            <h4>Enter Discount</h4>
            <p>Select from one available Discounting Mounting</p>
          </div>
          <form>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Discount Mode
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Discount Mode"
                >
                  <MenuItem value={"new"}>Set New Base Price</MenuItem>
                  <MenuItem value={"percent"}>Percent of Base Price</MenuItem>
                  <MenuItem value={"rupees"}>Rupees From Base Price</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth sx={{ my: 2.5 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Discount Amount
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">₹</InputAdornment>
                  }
                  label="Discount Amount"
                  placeholder="0.00"
                />
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth sx={{ my: 1.5 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Net Applicable Discount
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">₹</InputAdornment>
                  }
                  label="Net Applicable Discount"
                  placeholder="0.00"
                />
              </FormControl>
            </Box>
            <div className={styles.FormInfoFooter}>
              {" "}
              By clicking Apply Discount you are making updates to he cost sheet
              that the user can view. Confirm discount on the Summary on the
              right before clicking on Apply Discount.
            </div>
            <Box fullWidth sx={{ "& button": { my: 2 } }}>
              <Button fullWidth variant="contained" size="large">
                Apply Discount
              </Button>
            </Box>
          </form>
          <p className={styles.DownloadSheet}>Download Cost Sheet</p>
        </div>
        <div className={styles.Details}>
          <div className={styles.InfoHeader}>
            <h4>Summary</h4>
            <p>Select from one of the available units to proceed</p>
          </div>
          <div className={styles.PriceInfo}>
            <div>
              <p>Unit Number</p>
              <p>Gardenia, B 505</p>
            </div>
            <div>
              <p>Super Built up Area</p>
              <p>1058.7 Sq.Ft</p>
            </div>
            <div>
              <p>Base Price per Sqft</p>
              <p>₹5,747</p>
            </div>
            <div>
              <p>Total value of property</p>
              <p>₹59,47,382</p>
            </div>
            <div>
              <p>GST</p>
              <p>₹2,97,369</p>
            </div>
            <div>
              <p>Agreement Value</p>
              <p>₹62,44,751</p>
            </div>
            <div>
              <p>Additional &amp; Discounts</p>
              <p>₹1,93,523</p>
            </div>
          </div>
          <div className={styles.DiscountInfo}>
            <div>
              <p>Discount Per Sqft</p>
              <p>-₹{""}0.00</p>
            </div>
            <div>
              <p>Net Discount</p>
              <p>-₹{""}0.00</p>
            </div>
            <div>
              <p>Discount GST</p>
              <p>-₹{""}0.00</p>
            </div>
          </div>
          <div className={styles.Total}>
            <div className={styles.TotalInfo}>
              <h4>All Inclusive Total</h4>
              <p>10% Lower than Before</p>
            </div>
            <div>
              <h4>₹900000</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
