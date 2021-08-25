<template>
    <div>
        <h2>User management</h2>
        <div class="toolbar" style='text-align: right; margin-bottom: 10px;'>
            <el-button icon="el-icon-plus" size='mini'>
                 <router-link to="/user/create">Thêm mới</router-link>
            </el-button>
        </div>
        <el-table :data="users" border style="width: 100%">
            <el-table-column prop="fullname" label="Họ và tên"></el-table-column>
            <el-table-column prop="phone" label="Điện thoại"></el-table-column>
            <el-table-column prop="email" label="Email"></el-table-column>
            <el-table-column prop="birthday" label="Ngày sinh"></el-table-column>
            <el-table-column prop="gender" label="Giới tính" :formatter='genderFormat'></el-table-column>
            <el-table-column width='150'>
                <template #default="scope">
                    <router-link :to="{name: 'user.edit', params: { id: 1 }}">
                        <el-button size="mini" icon="el-icon-edit"></el-button>
                    </router-link>
                    
                    <el-button size="mini" type="danger" icon="el-icon-delete" @click='deleteUser()'></el-button>
                </template>
            </el-table-column>
        </el-table>
        
        <el-pagination style="margin-top: 20px;"
            background
            layout="prev, pager, next"
            :total="1000">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: 'UserIndex',
        data() {
            return {
                users: [
                    {
                        fullname: 'Nguyễn Văn A',
                        phone: '0942668586',
                        email: 'aaa@gmail.com',
                        birthday: '10/10/1988',
                        gender: 1,
                    },
                    {
                        fullname: 'Nguyễn Văn B',
                        phone: '0942668586',
                        email: 'aaa@gmail.com',
                        birthday: '10/10/1988',
                        gender: 2,
                    }
                ]
            }
        },
        created() {
            
        },
        methods: {
            genderFormat(row) {
                return row.gender === 1 ? 'Nam' : 'Nữ'
            },
            deleteUser() {
                this.$confirm('Bạn có thực sự muốn xoá?', 'SUNTECH', {
                    confirmButtonText: 'OK',
                    cancelButtonText: 'Cancel',
                    type: 'warning'
                }).then(() => {
                    this.$message({ type: 'success', message: 'Delete completed' });
                }).catch(() => {
                    this.$message({ type: 'info', message: 'Delete canceled' });
                });
            }
        }
    }
</script>

<style>

</style>