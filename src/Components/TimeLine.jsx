import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Box,
  Divider,
} from "@mui/material";
import { APICall } from '../helperFunction.js'
import moment from 'moment-timezone';
import momentTimezone from 'moment-timezone';
import { FaRegHeart } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';

export default function ImageGrid() {
  let [currPage, setCurrPage] = useState(1);
  const [posts, setPosts] = useState([]);
  
  // useEffect(() => {
  //   console.log('Count changed:', currPage);
  // }, [currPage]); // Dependency array ensures effect runs on currPage change

  async function getPosts() {
    // let fetchedData = [{}];
    try {
      const headers = {
        'Content-Type': 'application/json',
      };
      const requestBody = {
        pageSize: 1,
        pageNumber: currPage
      };
      // console.log('here123');
      let data = await APICall(requestBody, `/posts`, 'POST', headers);
      // console.log(data)
      if (data.length > 0) {
        setPosts([...posts, ...data]);
        setCurrPage(currPage + 1);
      } 
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
    pageStart={0}
    loadMore={getPosts}
    hasMore={true}
    loader={
      <div className="loader" key="loader">
          Loading ...
        </div>
      }
      >
      <Grid container >
        {posts.map(post => (
          <Grid item key={post.time} sx={{ width: '100%', height: '100%', pb : 2}}>
            <Image post={post}  key={uuidv4()}/>
            {/* <Button onClick={() => getPosts()} sx={{ backgroundColor: 'black'}}></Button> */}
          </Grid>
        ))}
      </Grid>
    </InfiniteScroll>
  );
}

function Image({ post }) {
  function getInterval(time) {
    const isoTimeString = time.slice(0, 19);  // Extract first 19 characters
    const backendMoment = momentTimezone.tz(isoTimeString, 'YYYY-MM-DD HH:mm:ss');
  
    // Get the current date and time in the user's time zone
    const now = moment.utc().tz(momentTimezone.tz.guess());
  
    // Calculate the difference in milliseconds (consider time zone adjustments)
    now.diff(backendMoment);
  
    // Convert milliseconds to appropriate unit and format with Moment.js
    const formattedTime = backendMoment.fromNow();
    return formattedTime
  }
  return (
    <Card sx={{ 
        // border: '2px solid black', 
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
        <Box sx={{ flexDirection: 'column'}}>
          <Box sx={{ display: 'flex', justifyContent: "space-between", pl: '15px', pr: '15px'}}>
            <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: 1 }}>
              <Box sx={{ height: '25px', width: '25px', paddingRight: 2}}>
                {/* <GoShieldCheck size= '25px' style={{ padding: 10,  }} /> */}
                <img src={post.pp} style={{ height: '30px', width: '30px', borderRadius: '50%',}} alt="img"/>
              </Box>
              <Box sx={{ margin: 0, padding: 0, fontSize: '9.5px'}}>
                <p style={{ margin: 0, fontSize: '10px', fontWeight: 'bold'}}>{post.brandName}</p>
                <p style={{ margin: 0}}> {post.role}</p>
                <p style={{ margin: 0}}> {getInterval(post.when)} </p>
              </Box>
            </Box>
            {/* <Box>
            <p> Follow button and Menu </p>
            </Box> */}
          </Box> 
          <Box>
            <p style={{ marginLeft: 48}}> {post.title} </p>
          </Box>
          <Box>
            <img src={post.image} alt="img" style={{ width: '100%'}}/>
          </Box>
          <Box sx={{display: 'flex', gap: '1.5rem', ml: 3}}>
            <p style={{ fontSize: '13px'}}> <FaRegHeart color="red"/> {post.likes}</p>
            <p style={{ fontSize: '13px'}}> Share </p>
            <p style={{ fontSize: '13px'}}> Comment </p>
          </Box>
          <Divider variant="middle"  component="div" sx={{ borderColor: 'black'}}/>
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
