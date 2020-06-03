import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {addToCart, deductFromCart, addItemToCart} from '../../../actions';
import items from '../../../data';

const CardItem = ({
  item,
  outerStyle,
  decrement,
  addItemToCart,
}) => {
  const handleOnAddClick = id => {
    addItemToCart(id);
  };

  const addItemsToCart = id => {
    addItemToCart(id);
  };

  const handleOnMinusClick = id => {
    decrement(id);
  };

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
              <View style={[outerStyle]}>
                <Text style={{marginTop: 25, paddingLeft: 10, fontSize: 16}}>
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
                    <TouchableOpacity onPress={() => handleOnAddClick(item.id)}>
                      <Text>
                        <Icon name="ios-add" size={18} />
                      </Text>
                    </TouchableOpacity>
                  </>
                ) : (
                  <TouchableOpacity
                    style={{alignItems: 'center', justifyContent: 'center'}}
                    onPress={() => {
                      addItemsToCart(item.id);
                    }}>
                    <Text style={{textAlign:'center', paddingLeft:10}}>Add</Text>
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
};

const mapDispatchToProps = dispatch => ({
  increment: payload => dispatch(addToCart(payload)),
  decrement: payload => dispatch(deductFromCart(payload)),
  addItemToCart: payload => dispatch(addItemToCart(payload)),
});

export default connect(
  null,
  mapDispatchToProps,
)(CardItem);

const styles = StyleSheet.create({});
