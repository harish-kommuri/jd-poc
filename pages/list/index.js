import React, { useState, useEffect, Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';

import useSWR, { mutate } from 'swr';
import * as _ from 'lodash';

import { UserListItem } from '../../components/list/UserListItem';

const useStyles = makeStyles({
    container: {
        overflow: 'auto'
    },
    spinner: {
        display: 'flex',
        height: '78px',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '36px'
    }
});

const fetcher = url => fetch(url).then(res => res.json());

const post = (url, payload) => fetch(url, {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
}).then(res => res.json());

function ListPage() {
    const classes = useStyles();
    const [users, setUsers] = useState([]);

    const [loadedAllDocuments, setLoadedAllDocuments] = useState(false);
    const [fetchingInProgress, setFetchingStatus] = useState(false);

    const endPoint = '/api/list';

    const { data } = useSWR(endPoint, fetcher);

    const getUsersList = _.debounce(async () => {
        if (fetchingInProgress || loadedAllDocuments) {
            return;
        }

        setFetchingStatus(true);

        try {
            const response = await post('/api/list', {
                lastRecordId: users.length > 0 ? users[users.length - 1].username : null
            });

            if (response?.ok) {
                mutate(endPoint, {
                    ok: true,
                    data: users.concat(response.data)
                }, false);
                if (response.data.length < 10) {
                    setLoadedAllDocuments(true);
                }
            } else {
                console.log("Something went wrong...", response);
            }
        } catch (err) {
            console.log(err);
        } finally {
            setFetchingStatus(false);
        }
    }, 800);

    useEffect(() => {
        if (data?.ok) {
            setUsers(data.data);
            if (data.data.length < 10) {
                setLoadedAllDocuments(true);
            }
        }
    }, [data]);

    const scrollHandler = e => {
        const { target } = e;
        const { scrollHeight, scrollTop, clientHeight } = target;
        const offScreenContentHeight = scrollHeight - (scrollTop + clientHeight);
        if (offScreenContentHeight < 54) {
            getUsersList();
        }
    };

    return (
        <div className={`page-container ${classes.container}`} onScroll={scrollHandler}>
            <List>
                {users.map((user, index) =>
                    <Fragment key={user.username}>
                        <UserListItem user={user} />
                        {(index < users.length - 1) && <Divider variant="inset" component="li" />}
                    </Fragment>
                )}
            </List>
            <div className={classes.spinner}>
                {loadedAllDocuments ? <div>Loaded all items...</div> : <CircularProgress />}
            </div>
        </div >
    );
}

export default ListPage;