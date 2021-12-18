module.exports = function (sequelize, DataTypes) {
    const order = sequelize.define(
      'order',
      {
        order_id: {
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        room_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        price:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
      

    }
    )
    
   
  
    return order;
  }