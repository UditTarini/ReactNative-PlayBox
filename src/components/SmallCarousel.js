import React from 'react'
import { View, ScrollView, Text,StyleSheet } from 'react-native'
import MovieItem from './MovieItem'



export const SmallCarousel = (props) => {

  const { items, style } = props;
  const itemsPerInterval = props.itemsPerInterval === undefined
    ? 1
    : props.itemsPerInterval;


  const [width, setWidth] = React.useState(0);
 
  const init = (width) => {
    
    setWidth(width);
    
   
  }

 

  const Movie = (props) => {

    const { label, value } = props;
  
    return (
      <View style={styles.movie}>
          <MovieItem resizer={'small'} />
      </View>
    );
  }


  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ ...styles.scrollView }}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={(w, h) => init(w)}
        onScroll={data => {
          setWidth(data.nativeEvent.contentSize.width);
         
        }}
        scrollEventThrottle={200}
        pagingEnabled
        decelerationRate="fast"
      >
        {items.map((item, index) => {
         
              return (
                <Movie
                  key={index}
                  
                />
              );
           
        })}
      </ScrollView>
      
    </View>
  )
}


const styles = StyleSheet.create({
  moviesHead: {
    paddingTop: 10,
    paddingHorizontal: 12,
  },
  container: {
    width: '100%', 
    marginTop: 10,
  
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
   
  },

  movie: {
    paddingHorizontal: 5,
    paddingVertical:10,
  }
});


export default SmallCarousel;