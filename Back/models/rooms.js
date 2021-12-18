module.exports = function (sequelize, DataTypes) {
    const room = sequelize.define(
      'room',
      {
        /*cat_id:{
          type: DataTypes.INTEGER,
          references: {
            model: 'cat', // 'fathers' refers to table name
            key: 'cat_id', // 'id' refers to column name in fathers table
         }
        },*/
        room_id: {
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        room_img: {
          type: DataTypes.STRING,
          allowNull: false
        },
        room_title: {
          type: DataTypes.STRING,
          allowNull: false
        },
        room_price: {
          type: DataTypes.INTEGER,
          allowNull:false
        }
       
      },
      
      {
        timestamps: true,
        underscored: true
      }
    )
   /* room.associate = function (models) {
        
        room.belongsTo(models.cat, { foreignKey: 'cat_id' })
             
    };*/
  
   
  
    return room;
  }