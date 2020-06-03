import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import items from '../../../data';
import CardItem from '../CardItem';
import {connect} from 'react-redux';
import {addToCart, deductFromCart, addItemToCart} from '../../../actions';
// import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
const Cart = ({navigation, cartItems, increment, decrement, addItemToCart, total}) => {
  const [isShowMore, setShowMore] = useState(false);
  const [isOptionClicked, setOptionClicked] = useState(true);
  const handleOnAddClick = id => {
    addItemToCart(id);
  };

  const addItemsToCart = id => {
    addItemToCart(id);
  };

  const handleOnMinusClick = id => {
    decrement(id);
  };

  console.log('props cart page', cartItems);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1, marginTop: 0}} showsVerticalScrollIndicator={false}>
        <View
          style={{
            backgroundColor: '#192B45',
            height: 200,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: '28%',
              width: '40%',
              backgroundColor: 'white',
              borderRadius: 5,
            }}>
            <Text style={{color: '#cbc197', paddingBottom: 10}}>
              Total Cost
            </Text>
            <Text style={{fontSize: 20}}>
              <Icon name="logo-euro" size={20} /> {total}
            </Text>
          </View>
        </View>
        <View style={{paddingLeft: 5, marginTop: 10}}>
          <Text style={{fontSize: 16}}>Review Orders</Text>
            <View>
          {typeof cartItems !== 'undefined' &&
            isShowMore ? cartItems.slice().map(item => {
              console.log(item.dish);
              return (
                <>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row'}}>
                      <View
                        style={{
                          justifyContent: 'center',
                          flexDirection: 'column',
                        }}>
                        {item.tags.map(tag => (
                          // <Text style={{height: 25,borderRadius:3, borderColor:'#eee', borderWidth:1}}>{tag}</Text>

                          <Text
                            style={{
                              height: 25,
                              borderRadius: 3,
                              borderColor: '#eee',
                              borderWidth: 1,
                              width: 20,
                              textAlign: 'center',
                            }}>
                            {tag}
                          </Text>
                        ))}
                      </View>
                      <View>
                        <View
                          style={{
                            flexDirection: 'row',

                            alignItems: 'center',
                          }}>
                          <View style={{marginRight: '25%'}}>
                            <Text
                              style={{
                                marginTop: 25,
                                paddingLeft: 10,
                                fontSize: 16,
                              }}>
                              {item.dish}
                            </Text>
                          </View>
                          <View
                            style={{
                              borderColor: '#cbc197',
                              borderWidth: 1,
                              paddingHorizontal: 15,
                              // paddingVertical: 5,
                              height: 20,
                              width: 90,
                              flexDirection: 'row',
                              marginTop: 25,
                              justifyContent: 'space-between',
                              alignItems: 'center',
                            }}>
                            {item.quantity > 0 ? (
                              <>
                                <TouchableOpacity
                                  onPress={() => handleOnMinusClick(item.id)}>
                                  <Text style={{textAlign: 'center'}}>
                                    <Icons
                                      name="minus"
                                      size={18}
                                      style={{paddingHorizontal: 10}}
                                    />
                                  </Text>
                                </TouchableOpacity>
                                <Text>{item.quantity}</Text>
                                <TouchableOpacity
                                  onPress={() => handleOnAddClick(item.id)}>
                                  <Text>
                                    <Icon name="ios-add" size={18} />
                                  </Text>
                                </TouchableOpacity>
                              </>
                            ) : (
                              <TouchableOpacity
                                style={{
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                                onPress={() => {
                                  addItemsToCart(item.id);
                                }}>
                                <Text>Add</Text>
                              </TouchableOpacity>
                            )}
                          </View>
                        </View>
                        <Text
                          style={{
                            paddingLeft: 10,
                            fontSize: 14,
                            marginTop: 2,
                            paddingTop: 9,
                          }}>
                          {item.ingredients}
                        </Text>
                        <Text style={{paddingLeft: 10, marginTop: 15}}>
                          <Icon name="logo-euro" size={18} color="#cbc197" />
                          {item.price}
                        </Text>
                      </View>
                    </View>
                  </View>
                </>
              );
            }) :
            cartItems.slice(0,2).map(item => {
              console.log(item.dish);
              return (
                <>
                  <View style={{flexDirection: 'row'}}>
                    <View style={{flexDirection: 'row'}}>
                      <View
                        style={{
                          justifyContent: 'center',
                          flexDirection: 'column',
                        }}>
                        {item.tags.map(tag => (
                          // <Text style={{height: 25,borderRadius:3, borderColor:'#eee', borderWidth:1}}>{tag}</Text>

                          <Text
                            style={{
                              height: 25,
                              borderRadius: 3,
                              borderColor: '#eee',
                              borderWidth: 1,
                              width: 20,
                              textAlign: 'center',
                            }}>
                            {tag}
                          </Text>
                        ))}
                      </View>
                      <View>
                        <View
                          style={{
                            flexDirection: 'row',

                            alignItems: 'center',
                          }}>
                          <View style={{marginRight: '25%'}}>
                            <Text
                              style={{
                                marginTop: 25,
                                paddingLeft: 10,
                                fontSize: 16,
                              }}>
                              {item.dish}
                            </Text>
                          </View>
                          <View
                            style={{
                              borderColor: '#cbc197',
                              borderWidth: 1,
                              paddingHorizontal: 15,
                              // paddingVertical: 5,
                              height: 20,
                              width: 90,
                              flexDirection: 'row',
                              marginTop: 25,
                              justifyContent: 'space-between',
                              alignItems: 'center',
                            }}>
                            {item.quantity > 0 ? (
                              <>
                                <TouchableOpacity
                                  onPress={() => handleOnMinusClick(item.id)}>
                                  <Text style={{textAlign: 'center'}}>
                                    <Icons
                                      name="minus"
                                      size={18}
                                      style={{paddingHorizontal: 10}}
                                    />
                                  </Text>
                                </TouchableOpacity>
                                <Text>{item.quantity}</Text>
                                <TouchableOpacity
                                  onPress={() => handleOnAddClick(item.id)}>
                                  <Text>
                                    <Icon name="ios-add" size={18} />
                                  </Text>
                                </TouchableOpacity>
                              </>
                            ) : (
                              <TouchableOpacity
                                style={{
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                }}
                                onPress={() => {
                                  addItemsToCart(item.id);
                                }}>
                                <Text>Add</Text>
                              </TouchableOpacity>
                            )}
                          </View>
                        </View>
                        <Text
                          style={{
                            paddingLeft: 10,
                            fontSize: 14,
                            marginTop: 2,
                            paddingTop: 9,
                          }}>
                          {item.ingredients}
                        </Text>
                        <Text style={{paddingLeft: 10, marginTop: 15}}>
                          <Icon name="logo-euro" size={18} color="#cbc197" />
                          {item.price}
                        </Text>
                      </View>
                    </View>
                  </View>
                </>
              );
            })
            }
          </View>
          <TouchableOpacity
            style={{flexDirection: 'row-reverse', paddingRight: 10}}
            onPress={() => setShowMore(!isShowMore)}>
            {isShowMore ? cartItems.length > 2 ? null : <Text  style={{
                  paddingRight: 20,
                  borderBottomColor: '#eee',
                  borderBottomWidth: 2,
                }}>Show More</Text> : (
              <Text
                style={{
                  paddingRight: 20,
                  borderBottomColor: '#eee',
                  borderBottomWidth: 2,
                }}>
                Show More
              </Text>
            )}
          </TouchableOpacity>
          <View>
            <Text style={{fontSize: 16}}>Delivery Options</Text>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text>
                  <Icon name="ios-restaurant" size={20} style={{padding: 10}} />
                </Text>
                <Text style={{paddingLeft: 10}}> Dine In </Text>
                <TouchableOpacity
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 50,
                    borderColor: isOptionClicked ? '#cbc197' : '#000',
                    borderWidth: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {isOptionClicked ? (
                    <View
                      style={{
                        backgroundColor: '#cbc197',
                        padding: 5,
                        height: 10,
                        width: 10,
                        borderRadius: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    />
                  ) : (
                    ''
                  )}
                </TouchableOpacity>
              </View>

              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text>
                  <Icons
                    name="truck-delivery"
                    size={20}
                    style={{padding: 10}}
                  />
                </Text>
                <Text style={{paddingLeft: 10}}> Take Away </Text>
                <TouchableOpacity
                  style={{
                    height: 20,
                    width: 20,
                    borderRadius: 50,
                    borderColor: isOptionClicked ? '#cbc197' : '#000',
                    borderWidth: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {!isOptionClicked ? (
                    <View
                      style={{
                        backgroundColor: '#cbc197',
                        padding: 5,
                        height: 10,
                        width: 10,
                        borderRadius: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    />
                  ) : (
                    ''
                  )}
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={{fontSize: 16, marginTop: 10}}>Manage Cards</Text>
        </View>
        <View style={{height: 70}} />
      </ScrollView>
      <View
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
      >
        <Text style={{color: 'white'}}>
          Place Order
        </Text>
        </View>
    </SafeAreaView>
  );
};

const mapStateToProps = ({cartItems, total}) => ({cartItems, total});

const mapDispatchToProps = dispatch => ({
  increment: payload => dispatch(addToCart(payload)),
  decrement: payload => dispatch(deductFromCart(payload)),
  addItemToCart: payload => dispatch(addItemToCart(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

