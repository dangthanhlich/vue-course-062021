<template>
    <div>
        <el-form ref="form" :model="sizeForm" label-width="120px" size="mini">
            <el-form-item label="Activity name">
                <el-input v-model="sizeForm.name" clearable></el-input>
            </el-form-item>
            <el-form-item label="Activity zone">
                <el-select v-model="sizeForm.region" clearable placeholder="please select your zone">
                <el-option label="Zone one" value="shanghai"></el-option>
                <el-option label="Zone two" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="Activity time">
                <el-col :span="11">
                <el-date-picker type="date" placeholder="Pick a date" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                <el-time-picker placeholder="Pick a time" v-model="sizeForm.date2" style="width: 100%;"></el-time-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="Activity type">
                <el-checkbox-group v-model="sizeForm.type">
                <el-checkbox-button label="Online activities" name="type"></el-checkbox-button>
                <el-checkbox-button label="Promotion activities" name="type"></el-checkbox-button>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Resources">
                <el-radio-group v-model="sizeForm.resource" size="medium">
                <el-radio border label="Sponsor"></el-radio>
                <el-radio border label="Venue"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item size="large">
                <el-button type="primary" size="small" @click="onSubmit">Create</el-button>
                <el-button size="small">Cancel</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

export default {
    name: '_UserForm',
    data() {
        return {
            sizeForm: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    },
}
</script>

<style>

</style>