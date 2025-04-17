import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    key: 'slide1',
    title: 'Welcome!',
    text: 'Discover new features and manage your tasks effectively.',
    image: require('../assets/images/intro1.png'),
    showNext: true,
  },
  {
    key: 'slide2',
    title: 'Stay Organized',
    text: 'Keep track of your work in one place.',
    image: require('../assets/images/intro2.png'),
    showNext: true,
  },
  {
    key: 'slide3',
    title: 'Get Started',
    text: 'Create an account and start your journey.',
    image: require('../assets/images/intro1.png'),
    showNext: false,
  },
];

const IntroScreen = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      {/* Top Half - Image */}
      <View style={styles.topContainer}>
        <Image source={item.image} style={styles.image} />
      </View>

      {/* Bottom Half - Text & Buttons */}
      <View style={styles.bottomContainer}>
        {/* Pagination Dots */}
        <View style={styles.pagination}>
          {slides.map((_, i) => (
            <View
              key={i}
              style={[styles.dot, activeIndex === i ? styles.activeDot : null]}
            />
          ))}
        </View>

        {/* Title & Description */}
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>

        {/* Button */}
        {item.showNext ? (
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => {
              if (activeIndex < slides.length - 1) {
                setActiveIndex((prev) => prev + 1);
                flatListRef.scrollToIndex({ index: activeIndex + 1 });
              }
            }}
          >
            <Image
              source={require('../assets/icons/next.png')}
              style={styles.nextIcon}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.createButton}
            onPress={() => navigation.navigate('Signup')}
          >
            <Text style={styles.createButtonText}>Create Account</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );

  let flatListRef;

  return (
    <FlatList
      data={slides}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      keyExtractor={(item) => item.key}
      onScroll={(e) => {
        const index = Math.round(
          e.nativeEvent.contentOffset.x / width
        );
        setActiveIndex(index);
      }}
      ref={(ref) => {
        flatListRef = ref;
      }}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    width,
    height,
    backgroundColor: '#007bff',
  },
  topContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: 30,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: -140,
  },
  dot: {
    width: 20,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: 'yellow',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 14,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    marginBottom: 24,
  },
  nextButton: {
    alignSelf: 'center',
    padding: 12,
    borderRadius: 50,
    marginTop: 16,
  },
  nextIcon: {
    width: 70,
    height: 70,
  },
  createButton: {
    alignSelf: 'center',
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    marginTop: 16,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default IntroScreen;
