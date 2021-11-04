import React from 'react';
import {Dimensions,Image,SafeAreaView,StyleSheet,Text,View,} from 'react-native';
import {FlatList,ScrollView,TextInput,TouchableHighlight,
TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import categories from '../../consts/categories';
import foods from '../../consts/foods';
const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const HomeScreen = ({navigation}) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.cat_ListContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index
                    ? COLORS.cyan
                    : COLORS.cyan,
                ...style.category_Btn,
              }}>
              <View style={style.cat_BtnImgCon}>
                <Image
                  source={category.image}
                  style={{height: 30, width: 30, resizeMode: 'cover'}}
                />
              </View>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  marginLeft: 10,
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.grey
                      : COLORS.primary,
                }}>
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };
  const Card = ({food}) => {
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('DetailsScreen', food)}>
        <View style={style.card}>
          <View style={{alignItems: 'center', top:10}}>
            <Image source={food.image} style={{height: 100, width: 100}} />
          </View>
          <View style={{marginHorizontal: 30, marginTop:20}}>
            <Text style={{fontSize: 13, fontWeight: 'bold'}}>{food.name}</Text>
            <Text style={{fontSize: 10, color: COLORS.grey, marginTop: 10, marginBottom:10}}>
              {food.ingredients}
            </Text>
          </View>
          <View
            style={{
              marginTop: 10,
              marginHorizontal: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              ${food.price}
            </Text>
            <View style={style.addToCartBtn}>
              <Icon name="add" size={20} color={COLORS.white} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 26}}>Hi,</Text>
            <Text style={{fontSize: 26, fontWeight: 'bold', marginLeft: 10}}>
              Rupesh
            </Text>
          </View>
          <Text style={{marginTop: 5, fontSize: 18, color: COLORS.grey}}>
            Choose your food.
          </Text>
        </View>
        <Image
          source={require('../../assets/person.png')}
          style={{height: 70, width: 70, borderRadius: 30}}
        />
      </View>
      <View
        style={{
          marginTop: 40,
          flexDirection: 'row',
          paddingHorizontal: 20,
        }}>
        <View style={style.inputCont}>
          <Icon name="search" size={28} />
          <TextInput
            style={{flex: 1, fontSize: 18}}
            placeholder="Search for food"
          />
        </View>
        <View style={style.sortBtn}>
          <Icon name="toc" size={28} color={COLORS.white} />
        </View>
      </View>
      <View>
        <ListCategories />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={foods}
        renderItem={({item}) => <Card food={item} />}
      />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {marginTop: 20,flexDirection: 'row',justifyContent: 'space-between',paddingHorizontal: 20,},

  inputCont: {flex: 1,height: 50,borderRadius: 10,flexDirection: 'row',
    backgroundColor: COLORS.cyan,
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  sortBtn: {width: 50,height: 50,marginLeft: 10,backgroundColor: COLORS.cyan,borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cat_ListContainer: {paddingVertical: 30,alignItems: 'center',paddingHorizontal: 20,
  },
  category_Btn: {height: 45,width: 120,marginRight: 7,borderRadius: 30,alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  cat_BtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.light,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: COLORS.cyan,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
