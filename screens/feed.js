/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
} from 'react-native';

import Header from '../components/Header';
import ScrollBar from '../components/ScrollBar';
import Post from '../components/Post';
import Footer from '../components/Footer';

const {width, height} = Dimensions.get('screen');

const App = props => {
  const [model, setModel] = React.useState({
    foryou: true,
    foryoubold: 'black',
    featured: false,
    featuredbold: '#B2BABB',
    topstories: false,
    topstoriesbold: '#B2BABB',
  });
  return (
    <View style={styles.mainContainer}>
      <StatusBar translucent backgroundColor="#000000a0" />
      <Header />
      <ScrollBar model={model} setModel={setModel} />

      {model.foryou ? (
        <ScrollView style={styles.feed}>
          <Post
            {...props}
            title={'Diane Kruger Has a City take on the Cowboy Boot'}
            category={'Travel'}
            image={
              'https://www.purpleday.org/wp-content/uploads/2020/10/117930414_10157714060658505_4548981716546555477_o-1024x498.jpg'
            }
          />
          <Post
            {...props}
            title={
              'Jacinda Ardern, prime minister of New Zealand, hugs a mosque-goer at the Kilbirnie mosque in Wellington, on March 17, 2019'
            }
            category={'Politics'}
            image={
              'https://cdn.theatlantic.com/media/img/photo/2019/12/top-25-news-photos-2019/y01_1136278910-1/original.jpg'
            }
          />
        </ScrollView>
      ) : null}

      {model.featured ? (
        <ScrollView style={styles.feed}>
          <Post
            {...props}
            title={'OMCs again resort to alternate day fuel price revision'}
            category={'International'}
            image={
              'https://assets-news-bcdn.dailyhunt.in/cmd/resize/400x400_80/fetchdata16/images/da/8d/33/da8d338c45673050f9c46e3ea926d3a3d401c3f13421043e43cac760f7c04569.jpg'
            }
          />
          <Post
            {...props}
            title={
              'Major Australian banks report incidents of online banking failures'
            }
            category={'Featured Stories'}
            image={
              'https://assets-news-bcdn.dailyhunt.in/cmd/resize/400x400_80/fetchdata16/images/7d/32/97/7d32978f7f4eddbc3a6c7165935f50242ccaf7811902567046762f4ee3924d28.jpg'
            }
          />
        </ScrollView>
      ) : null}

      {model.topstories ? (
        <ScrollView style={styles.feed}>
          <Post
            {...props}
            title={
              "Twitter introduces 'Arabic (feminine)' language option for users to support inclusivity on social network"
            }
            category={'Tech'}
            image={
              'https://assets-news-bcdn.dailyhunt.in/cmd/resize/400x400_80/fetchdata16/images/16/4f/b7/164fb77bed53be4d449eb5e1c19305a516763e991e363512ea06b4984380e7c6.jpg'
            }
          />
          <Post
            {...props}
            title={'Five yoga suggestions to help you breathe easy'}
            category={'Lifestyle'}
            image={
              'https://assets-news-bcdn.dailyhunt.in/cmd/resize/400x400_80/fetchdata16/images/45/db/8e/45db8e902749496a6e53b5e2f5dfa1f38e48c3e32d52c2ee3b45e6b8fab41096.jpg'
            }
          />
        </ScrollView>
      ) : null}

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: 'white',
  },
  feed: {
    width: '100%',
    height: '70%',
  },
});

export default App;
