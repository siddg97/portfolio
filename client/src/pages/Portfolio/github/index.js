import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import GhCharts from "./GhCharts.js";
import GhRepos from "./GhRepos.js";
import { Loading, cache } from "../../../common";

const useStyles = makeStyles((theme) => ({
    header: {
        marginTop: theme.spacing(3),
    },
}));

const GithubProfile = () => {
    const [userData, setUserData] = useState(null);
    const [langData, setLangData] = useState(null);
    const [repoData, setRepoData] = useState(null);
    const [starData, setStarData] = useState(null);

    const classes = useStyles();

    const initUserData = () => {
        (async () => {
            try {
                // Check cache first
                const data = cache.get("/api/user");
                if (data) {
                    setUserData(data);
                } else {
                    // Get user data
                    var res = await axios.get("/api/user");
                    let user = await res.data;
                    cache.set("/api/user", user, 3600);
                    setUserData(user);
                }
            } catch (err) {
                console.log(err.message);
                setUserData(null);
                cache.remove("/api/user");
            }
        })();
    };

    const initLangData = () => {
        (async function () {
            try {
                // Check cache
                const data = cache.get("/api/user/lang-stats");
                if (data) {
                    setLangData(data);
                } else {
                    // Get data
                    const res = await axios.get("/api/user/lang-stats");
                    let response = await res.data;
                    const langChartData = response.langStats;
                    cache.set("/api/user/lang-stats", langChartData, 3600);
                    setLangData(langChartData);
                }
            } catch (err) {
                console.log(err.message);
                setLangData(null);
                cache.remove("/api/user/lang-stats");
            }
        })();
    };

    const initRepoData = () => {
        (async function () {
            try {
                // Check cache first
                const data = cache.get("/api/user/top-repos");
                if (data) {
                    setRepoData(data);
                } else {
                    // Get data
                    const res = await axios.get("/api/user/top-repos");
                    const response = await res.data;
                    const repoChartData = response.topRepos;
                    cache.set("/api/user/top-repos", repoChartData, 3600);
                    setRepoData(repoChartData);
                }
            } catch (err) {
                console.log(err.message);
                setRepoData(null);
                cache.remove("/api/user/top-repos");
            }
        })();
    };

    const initStarData = () => {
        (async function () {
            try {
                // Check cache first
                const data = cache.get("/api/user/lang-stars");
                if (data) {
                    setStarData(data);
                } else {
                    const res = await axios.get("/api/user/lang-stars");
                    const response = await res.data;
                    const starChartData = response.langStars;
                    cache.set("/api/user/lang-stars", starChartData, 3600);
                    setStarData(starChartData);
                }
            } catch (err) {
                console.log(err.message);
                setStarData(null);
                cache.remove("/api/user/lang-stars");
            }
        })();
    };

    useEffect(() => {
        initUserData();
        initLangData();
        initRepoData();
        initStarData();
    }, []);

    return (
        <Grid container spacing={1} justify="center" alignItems="center">
            <Grid item xs={12}>
                <Typography
                    variant="h2"
                    color="primary"
                    className={classes.header}
                    gutterBottom
                >
                    Github Summary
                </Typography>
            </Grid>
            {userData && langData && repoData && starData ? (
                <Fragment>
                    <GhCharts
                        user={userData}
                        langData={langData}
                        repoData={repoData}
                        starData={starData}
                    />
                    <GhRepos repos={repoData} />
                </Fragment>
            ) : (
                <Loading />
            )}
        </Grid>
    );
};

export default GithubProfile;
