module.exports = function (sequelize, DataTypes) {
    const book = sequelize.define(
      'book',
      {
        book_id: {
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        roomId:{
          type:DataTypes.INTEGER
        },
        email:{
          type:DataTypes.STRING
        }
        
    },
      
    )
    
  
   
  
    return book;
  }