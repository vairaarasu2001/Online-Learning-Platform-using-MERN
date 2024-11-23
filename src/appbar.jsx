import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { userEmailState } from "./store/selectors/selectors";
import { userState } from "./store/atoms/admin";

function Appbar() {
    const navigate = useNavigate();
    const useremail = useRecoilValue(userEmailState);
    const setuser = useRecoilState(userState)[1];

    return (
        <div style={styles.navbar}>
            <div style={styles.leftSection}>
                <Typography variant="h6">
                    <Link to="/admin/addcourse" style={styles.titleLink}>
                        e-learn(Naan Mudhalvan)
                    </Link>
                </Typography>
            </div>
            <div style={styles.rightSection}>
                {useremail ? (
                    <>
                        <div style={styles.emailDisplay}>
                            <Link to="/admin/course" style={styles.link}>
                                {useremail}
                            </Link>
                        </div>
                        <Button style={styles.button} variant="outlined" onClick={() => navigate("/admin/addcourse")}>
                            Add Course
                        </Button>
                        <Button style={styles.button} variant="outlined" onClick={() => navigate("/admin/course")}>
                            Your Courses
                        </Button>
                        <Button
                            style={{ ...styles.button, ...styles.logoutButton }}
                            variant="contained"
                            onClick={() => {
                                localStorage.setItem("token", null);
                                setuser({ useremail: null });
                            }}
                        >
                            Log out
                        </Button>
                    </>
                ) : (
                    <>
                        <Button style={styles.button} variant="outlined" onClick={() => navigate("/admin/signin")}>
                            Signin
                        </Button>
                        <Button style={styles.signupButton} variant="contained" onClick={() => navigate("/admin/signup")}>
                            Signup
                        </Button>
                    </>
                )}
            </div>
        </div>
    );
}

const styles = {
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        padding: "8px 16px",
        backgroundColor: "#1c1c1e",
        color: "#fff",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        transition: "all 0.3s ease-in-out",
    },
    leftSection: {
        display: "flex",
        alignItems: "center",
    },
    titleLink: {
        textDecoration: "none",
        color: "#fff",
        fontWeight: "bold",
        fontSize: "1.25rem",
        transition: "color 0.3s ease",
        "&:hover": {
            color: "#ff7e39",
        },
    },
    rightSection: {
        display: "flex",
        alignItems: "center",
    },
    emailDisplay: {
        paddingRight: "16px",
        fontSize: "18px",
    },
    link: {
        textDecoration: "none",
        color: "#ff7e39",
        transition: "color 0.3s ease",
        "&:hover": {
            color: "#ffb74d",
        },
    },
    button: {
        marginLeft: "8px",
        color: "#fff",
        borderColor: "#ff7e39",
        transition: "background-color 0.3s ease, transform 0.2s",
        "&:hover": {
            backgroundColor: "#ff7e39",
            transform: "scale(1.05)",
        },
    },
    signupButton: {
        marginLeft: "8px",
        backgroundColor: "#ff7e39",
        color: "#fff",
        "&:hover": {
            backgroundColor: "#ffb74d",
        },
    },
    logoutButton: {
        backgroundColor: "#ff5252",
        "&:hover": {
            backgroundColor: "#ff7961",
        },
    },
};

export default Appbar;
