import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import { APICall } from '../helperFunction.js'
import { GoShieldCheck } from "react-icons/go";
import logo from '../assets/yaallo.jpeg'

export default function ImageGrid() {
  let [currPage, setCurrPage] = useState(1);
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    console.log('Count changed:', currPage);
  }, [currPage]); // Dependency array ensures effect runs on currPage change

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
            <Image post={post}  key={post.time}/>
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
        <Box sx={{ flexDirection: 'column'}}>
          <Box sx={{ display: 'flex', justifyContent: "space-between", pl: '15px', pr: '15px'}}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box>
                <GoShieldCheck size= '25px' style={{ padding: 10,  }} />
              </Box>
              <Box sx={{ margin: 0, padding: 0, fontSize: '9.5px'}}>
                <p style={{ margin: 0, fontSize: '10px', fontWeight: 'bold'}}>{post.brname}</p>
                <p style={{ margin: 0}}> role</p>
                <p style={{ margin: 0}}> Time </p>
              </Box>
            </Box>
            {/* <Box>
            <p> Follow button and Menu </p>
            </Box> */}
          </Box> 
          <Box>
            <p style={{ marginLeft: 59}}> {post.title} </p>
          </Box>
          <Box>
            {/* <p> Image </p> */}
            <img src={logo} alt="img"/>
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
