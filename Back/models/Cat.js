module.exports = function (sequelize, DataTypes) {
    const cat = sequelize.define(
      'cat',
      {
        cat_id: {
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        cat_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        cat_img:{
            type:DataTypes.STRING,
            allowNull:false
        },
        cat_title:{
            type: DataTypes.STRING,
            allowNull: false
        }

    },
      {
        timestamps: true,
        underscored: true
      }
    )
    /*cat.associate = function (models) {
      cat.hasMany(models.room, { foreignKey: 'cat_id'})
  };*/
  
   
  
    return cat;
  }