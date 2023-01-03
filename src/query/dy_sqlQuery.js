const {connection} = require("../../db");

const fetchRecord = async (req, res) => {
  try {
    const query = `select manager.m_id,m_name,manager.age,count(employee.e_id) from manager 
    left join (emp_manager,employee) on (emp_manager.m_id=manager.m_id and
   employee.e_id=emp_manager.e_id and employee.age>=${req.body.age})
   group by m_id having count(employee.e_id)=0 order by m_id
    `;
    await connection.query(query, (err, resp) => {
      if (err) throw err;
      if (resp) {
        res.send(resp);
      } else {
        res.send("record does not exists");
      }
    });
  } catch (error) {
    console.log(error);
    console.log("something went wrong");
  }
};

module.exports = { fetchRecord };
