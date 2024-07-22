const pool = require('../../config/database')
const excel = require('exceljs');

function downloadExcel(jsonUsers) {
    let workbook = new excel.Workbook(); //creating workbook
    let worksheet = workbook.addWorksheet('Users'); //creating worksheet

    //  WorkSheet Header
    worksheet.columns = [
        { header: 'Id', key: 'id', width: 10 },
        { header: 'First Name', key: 'firstName', width: 30 },
        { header: 'Last Name', key: 'lastName', width: 30},
        { header: 'Gender', key: 'gender', width: 10},
        { header: 'Email ID', key: 'email', width: 10},
        { header: 'Password', key: 'password', width: 10},
        { header: 'Phone Number', key: 'number', width: 10, outlineLevel: 1}
    ];

    // Add Array Rows
    worksheet.addRows(jsonUsers);

    return workbook;
}

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into registration(firstName, lastName, gender, email, password, number)
                values(?,?,?,?,?,?)`,
                [
                    data.first_name,
                    data.last_name,
                    data.gender,
                    data.email,
                    data.password,
                    data.number
                ],
                (error, results, fields) => {
                    if (error) {
                        return callBack(error)
                    }
                    return callBack(null, results)
                }
        )
    },
    getUsers: (callBack) => {
        pool.query(
            `select * from registration`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        )
    },
    getUsersByUserId: (id, callBack) => {
        pool.query(
            `select * from registration where id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results[0])
            }
        )
    },
    updateUser: (data, callBack) => {
        pool.query(
            `update registration set firstName=?, lastName=?, gender=?, email=?, password=?, number=? where id = ?`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        )
    },
    deleteUser: (data, callBack) => {
        pool.query(
            `delete from registration where id = ?`,
            [data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        )
    },
    getExcelOfRecords: (callBack) => {
        pool.query(
            `select * from registration`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error)
                }
                const jsonUsers = JSON.parse(JSON.stringify(results));
                const workbook = downloadExcel(jsonUsers)
                return callBack(null, workbook)
            }
        )
    }
}