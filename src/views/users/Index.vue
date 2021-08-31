<template>
    <div>
        <h2>User Management</h2>
        <div class="toolbar" style='text-align: right; margin-bottom: 10px;'>
            <el-button icon="el-icon-plus" size='mini'>
                 <router-link to="/user/create">Thêm mới</router-link>
            </el-button>
        </div>
        <el-table :data="users" border style="width: 100%" v-loading="loading">
            <el-table-column prop="id" label="ID" width="80" align="center"></el-table-column>
            <el-table-column :formatter="fullnameFormat" label="Họ và tên"></el-table-column>
            <el-table-column prop="email" label="Email"></el-table-column>
            <el-table-column prop="birthday" label="Ngày sinh"></el-table-column>
            <el-table-column prop="gender" label="Giới tính" :formatter='genderFormat'></el-table-column>
            <el-table-column width='150'>
                <template #default="scope">
                    <router-link :to="{name: 'user.edit', params: { id: 1 }}">
                        <el-button size="mini" icon="el-icon-edit"></el-button>
                    </router-link>
                    <el-button size="mini" type="danger" icon="el-icon-delete" @click='deleteUser(scope.row)'></el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination
            background
            @current-change="changePage"
            :page-size="pageSize"
            layout="prev, pager, next"
            :total="totalRecord">
        </el-pagination>
    </div>
</template>

<script>

import { getAllUser, deleteUser } from '@/api/user'

export default {
    name: 'UserIndex',
    data() {
        return {
            users: [],
            totalRecord: 0,
            pageSize: 6,
            currentPage: 1,
            loading: false,
        }
    },
    created() {
        this.queryAll() 
    },
    methods: {
        changePage(page) {
            this.currentPage = page
            this.queryAll()
        },
        queryAll() {
            this.loading = true

            getAllUser(`?page=${this.currentPage}`).then(res => {
                this.users = res.data.data
                this.totalRecord = res.data.total
                this.loading = false
            })
        },
        genderFormat(row) {
            return row.gender === 1 ? 'Nam' : 'Nữ'
        },
        fullnameFormat(row) {
            return row.first_name + ' ' + row.full_name
        },
        deleteUser(row) {

            this.$confirm('Bạn có thực sự muốn xoá?', 'SUNTECH', {
                confirmButtonText: 'OK',
                cancelButtonText: 'Cancel',
                type: 'warning'
            }).then(() => {
                deleteUser(row.id).then(res => {
                    this.$message({ type: 'success', message: 'Delete completed' });
                    this.queryAll()
                })
            }).catch(() => {
                this.$message({ type: 'info', message: 'Delete canceled' });
            });
        }
    }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.el-table {
  border-radius: 10px;
}
.user__index {
  height: 100vh;
}
.toolbar {
  text-align: right;
  padding: 10px;
}
.el-pagination {
  text-align: center;
  padding: 30px;
}
.el-button {
  margin: 5px;
}
</style>
