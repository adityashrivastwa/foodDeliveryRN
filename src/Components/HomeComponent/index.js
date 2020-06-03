import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Modal,
  SafeAreaView,
} from 'react-native';
import {Images} from '../../../Constants/images';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import items from '../../../data';
import CardItem from '../CardItem';
import {connect} from 'react-redux';
import {addToCart, deductFromCart, addItemToCart} from '../../../actions';

const HomeComponent = props => {
  const [modal, setModal] = useState(false);
  const onModalPress = () => {
    setModal(!modal);
  };
  let flatListRef = useRef();
  const scrollToItem = (id = 150) => {
    flatListRef.scrollToOffset({animated: false, offset: id});
  };
  console.log(props);
  const handleAddClick = id => {
    addItemToCart(id);
  };

  const handleMinusClick = id => {
    decrement(id);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Image
        source={Images.salad}
        height={200}
        width={'100%'}
        style={{height: 200, width: '100%', resizeMode: 'cover'}}
      />
      <View
        style={{
          position: 'absolute',
          top: 100,
          height: 180,
          width: '90%',
          backgroundColor: 'white',
          left: 20,
          alignItems: 'center',
          shadowColor: '#eee',
          shadowOffset: {
            height: 2,
            width: 0,
          },
          shadowOpacity: 1,
          shadowRadius: 2,
          zIndex: 10,
          elevation:3,
          borderRadius:5
        }}>
        <View
          style={{
            marginVertical: 20,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Text style={{fontWeight: 'bold'}}>Inka Restaurant</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
          }}>
          <Text>
            <Icon name="ios-star-outline" size={16} />
          </Text>
          <Text>5.0(200+) | All days : 09:00AM - 06:00PM</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            marginTop: 20,
          }}>
          <Text>
            <Icons name="phone-in-talk" size={18} />
          </Text>
          <Text style={{paddingLeft: 20}}>Reach us at : 9854562142</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            console.log('Book a Table')
          }}
          style={{
            width: 120,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#192B45',
            borderRadius: 5,
            marginTop: 5,
          }}>
          <Text style={{color: 'white'}}>Book a table</Text>
        </TouchableOpacity>
      </View>
      <View />
      {modal && <MenuModal onModalPress={onModalPress} visible={modal} scrollToItem={scrollToItem} ref={flatListRef} />}
      <TouchableOpacity
        onPress={onModalPress}
        style={{
          position: 'absolute',
          bottom: 65,
          zIndex: 10,
          width: '20%',
          left:'39%',
          backgroundColor: '#e5b87d',
          flexDirection: 'row',
          justifyContent:'center',
          alignItems:'center',
          borderRadius:4,
          padding:10
        }}>
        <Text>
          <Icons name={'food'} size={18}  />
        </Text>
        <Text>Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#192B45',
          height: 50,
          zIndex: 10,
          width: '100%',
          flexDirection:'row',
          justifyContent:'center',
          alignItems:'center'
        }}
        onPress={() => props.navigation.navigate('cart')}
      >
        <Text>
          <Icons name={"cart"} size={19} color={"white"} /> 
        </Text>
        <Text style={{color:'white', textTransform:'uppercase'}}>View Cart</Text>
      <Text style={{color:'white', textTransform: 'uppercase'}}>(
        {props.cartItems.length} 
        items)</Text>
      </TouchableOpacity>
      <View style={{marginTop: '20%', marginBottom: '60%'}}>
        <FlatList
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          data={items}
          ref={ref => flatListRef = ref}
          keyExtractor={({item, i}) => i}
          renderItem={({item, index}) => (
            <View style={{padding: 20}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  marginVertical: 10,
                  padding: 20,
                }}>
                Starter Items
              </Text>
              {item.data.slice(0, 12).map(starter => (
                <CardItem
                  item={starter}
                  counter={props.counter}
                  outerStyle={{marginRight: '30%'}}
                />
              ))}
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 18,
                  marginVertical: 10,
                  padding: 20,
                }}>
                Main Course
              </Text>
              {item.data.slice(13, 19).map(mainCourse => (
                <CardItem 
                item={mainCourse} 
                outerStyle={{marginRight: '20%'}} />
              ))}
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = ({cartItems, total}) => ({ cartItems, total});
const mapDispatchToProps = dispatch => ({
  increment: (payload) => dispatch(addToCart(payload)),
  decrement: (payload) => dispatch(deductFromCart(payload)),
  addItemToCart: payload => dispatch(addItemToCart(payload))
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);

const MenuModal = React.forwardRef((props, ref) =>(
  <Modal visible={props.visible} transparent={true} >
    <TouchableOpacity
    
      onPress={props.onModalPress}
      style={{
        flex: 1,
        flexDirection: 'column-reverse',
        marginBottom: 36,
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.7)',
      }}>
      <View
        style={{
          height: 200,
          width: 300,
          backgroundColor: 'white',
          borderRadius: 5,
          padding: 15,
          marginVertical: 10,
         
        }}
        onPress={() => alert('hello')}>
        <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between', marginVertical: 10}} onPress={() => {
          props.scrollToItem(1300);
        }}>
          <Text>Starter</Text>
          <Text>13</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between',marginVertical: 10}}>
          <Text>Main Course</Text>
          <Text>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between',marginVertical: 10}}>
          <Text>Dessert</Text>
          <Text>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row', justifyContent:'space-between',marginVertical: 10}}>
          <Text>Drinks</Text>
          <Text>11</Text>
        </TouchableOpacity>
      </View>
      
    </TouchableOpacity>
  </Modal>
))
