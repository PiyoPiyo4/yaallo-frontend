import React, { useEffect, useState } from "react";
// import axios from "axios";
import queryString from "query-string";
import InfiniteScroll from "react-infinite-scroller";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button
} from "@mui/material";
// import { APICall } from '../helperFunction.js'
import { GoShieldCheck } from "react-icons/go";
import logo from '../assets/yaallo.jpeg'

const IMAGES_ENDPOINT = "https://picsum.photos/v2/list";

const APICall = (requestBody, path, methodType, headersData) => {
  if (requestBody !== null) requestBody = JSON.stringify(requestBody);
    return new Promise((resolve, reject) => {
      const init = {
        method: methodType,
        headers: headersData,
        body: requestBody,
      }
      fetch(`${path}`, init)
        .then(response => {
          if (response.status === 200) {
            return response.json().then(resolve);
          } else if (response.status === 400) {
            return response.json().then(obj => {
              reject(obj.message);
            });
          } else if (response.status === 403) {
            return response.json().then(obj => {
              reject(obj.message);
            });
          } else {
            throw new SyntaxError(`Error with API call`);
          }
      });
    })
}


export default function ImageGrid() {
  const [images, setImages] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    console.log('Count changed:', currPage);
  }, [currPage]); // Dependency array ensures effect runs on currPage change
  
  useEffect(() => {
    // ... existing code
    initialGetPosts(); // Initial data fetch
  }, []);

  async function initialGetPosts() {
    let fetchedData = [{}];
    try {
      const headers = {
        'Content-Type': 'application/json',
      };
      const requestBody = {
        pageSize: 1,
        pageNumber: 1
      };
      console.log('first');
      let data = await APICall(requestBody, `http://localhost:5000/posts`, 'POST', headers);
      fetchedData = [...fetchedData, ...data];
      console.log('here12');
      console.log(data);
      if (data.length < 1) {
        setHasMore(false);
      } else {
        setCurrPage(prevCurrPage => prevCurrPage + 1); // Update with previous state
      }
      setPosts(prevPosts => [...prevPosts, ...fetchedData]); // Update with previous state
  
      if (data.error) {
        throw new Error(data.error);
      }
    } catch (err) {
      console.log(err);
      alert(err);
    }
  }

  async function getPosts() {
    let fetchedData = [{}];
    try {
      const headers = {
        'Content-Type': 'application/json',
      };
      const requestBody = {
        pageSize: 1,
        pageNumber: currPage
      };
      console.log('here123');
      let data = await APICall(requestBody, `http://localhost:5000/posts`, 'POST', headers);
      fetchedData = [...fetchedData, ...data];
      console.log('here12');
      console.log(data);
      if (data.length < 1) {
        setHasMore(false);
      } else {
        setCurrPage(prevCurrPage => prevCurrPage + 1); // Update with previous state
      }
      setPosts(prevPosts => [...prevPosts, ...fetchedData]); // Update with previous state
  
      if (data.error) {
        throw new Error(data.error);
      }
    } catch (err) {
      console.log(err);
      alert(err);
    }
  }

  return (
    <InfiniteScroll
      // pageStart={0}
      loadMore={getPosts}
      hasMore={hasMore}
      loader={
        <div className="loader" key="loader">
          Loading ...
        </div>
      }
    >
      <Grid container >
        {posts.map(post => (
          <Grid item sx={{ width: '100%', height: '100%', pb : 2}}>
            <Image post={post} />
            {/* <Button onClick={() => getPosts()} sx={{ backgroundColor: 'black'}}></Button> */}
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  );
}

function Image({ post }) {
  return (
    <Card sx={{ 
        border: '2px solid black', 
        '& .MuiCardContent-root:last-child': {
        paddingBottom: '0px'
       },
      }}>
      <CardMedia
        sx={{ width:'100%' }}
        // image="https://i.picsum.photos/id/160/3200/2119.jpg"
      />
      <CardContent sx={{
        padding: '0px',
        '& .MuiCardContent-root:last-child': {
          paddingBottom: '0px'
      },
        //MuiCardContent-root:last-chil
      }}>
        <Box sx={{ display: 'flex' , flexDirection: 'column'}}>
          <Box sx={{ display: 'flex', justifyContent: "space-between", pl: '15px', pr: '15px'}}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box>
                <GoShieldCheck size= '25px' style={{ padding: 10,  }} />
              </Box>
              <Box sx={{ margin: 0, padding: 0, fontSize: '9.5px'}}>
                <p style={{ margin: 0, fontSize: '10px', fontWeight: 'bold'}}> Name {post.brname}</p>
                <p style={{ margin: 0}}> role</p>
                <p style={{ margin: 0}}> Time </p>
              </Box>
            </Box>
            <Box>
            <p> Follow button and Menu </p>
            </Box>
          </Box>
          <Box>
            <p style={{ marginLeft: 59}}> Title and View page (Discover) </p>
          </Box>
          <Box>
            {/* <p> Image </p> */}
            <img src={logo} />
          </Box>
          <Box sx={{display: 'flex', gap: '1.5rem', ml: 3}}>
            <p> Like count </p>
            <p> Share </p>
            <p> Comment </p>
          </Box>
          <Box sx={{display: 'flex', gap: '1.5rem', ml: 3}}>
            <p> Like count </p>
            <p> Share </p>
            <p> Comment </p>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
