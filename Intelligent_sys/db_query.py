# -*- coding: utf-8 -*-
"""
@author:  Administrator
@software: PyCharm
@file: db_query
@time: 2022/4/25
pip install 包名 -i http://pypi.douban.com/simple --trusted-host pypi.douban.com
"""
import threading
import random
from apscheduler.schedulers.background import BackgroundScheduler
import pymysql
import json
import datetime
import decimal
import json


# 取桃花岛数据，转化为json数据，传入echarts
# 1.取数据库值

class Decimal_and_DateEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, datetime.datetime):
            return o.strftime("%Y-%m-%d %H:%M:%S")
        elif isinstance(o, decimal.Decimal):
            return float(o)
        else:
            return json.JSONEncoder.default(self, o)


def dict_to_json(dict_data):
    axis_value = json.dumps(dict_data, cls=Decimal_and_DateEncoder, ensure_ascii=False)
    return axis_value


# 数据库采集语句，现在由于没有硬件接入，只能自己写数据插入。
def insertData():
    db = pymysql.connect(host='localhost', user='root', passwd='root', db='db_sea', port=3306, charset='utf8')
    cur = db.cursor()
    ad = ["桃花", "嵊泗", "东极"]
    point = ["监测点1", "监测点2", "监测点3"]
    for i in range(0, 3):
        lt = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        for j in range(0, 3):
            # 每个养殖场，每个监测点数据10条，展示也用这10条
            wt = round(random.uniform(15, 20), 1)
            sal = round(random.uniform(20, 30), 1)
            do = round(random.uniform(0, 3), 1)
            ph = round(random.uniform(7, 14), 1)
            fv = round(random.uniform(1, 2), 1)
            ii = round(random.uniform(0, 5), 1)
            sql = f"insert into fisherybase(ad,point,lt,wt,sal,do,ph,fv,ii)VALUES('{ad[i]}','{point[j]}','{lt}',{wt},{do},{ph},{sal},{fv},{ii}) "
            print(sql)
            try:
                cur.execute(sql)
                db.commit()
            except Exception as e:
                db.rollback()
                print(e)
    cur.close()
    db.close()


# 现在需要采集一个养殖场多个监测点的多属性数据，比如桃花岛养殖基地监测点1，监测点2等等
def mainData():
    db = pymysql.connect(host='localhost', user='root', passwd='root', db='db_sea', port=3306, charset='utf8')
    cur = db.cursor()  # 游标(指针)cursor的方式操作数据
    sql = f"select * from (select * from fisherybase where ad='桃花' order by id desc limit 30) aa ORDER BY id"  # sql语句
    # select {need_data} from (select * from env where ad='桃花' order by id desc limit 10) aa ORDER BY id
    # 原select {need_data} from env where ad='桃花'
    cur.execute(sql)  # execute(query, args):执行单条sql语句
    catch_data = cur.fetchall()
    # ((20, '桃花', '监测点1', datetime.datetime(2022, 4, 30, 15, 1, 54), Decimal('17.4'),
    # 可以看到从数据库读出的数据,有字符串格式:'桃花','监测点1',datetime格式,decimal格式.
    cur.close()
    db.close()
    p = []
    lt = []
    wt = []
    sal = []
    do = []
    ph = []
    fv = []
    ii = []
    for i in catch_data:
        p.append(i[2])
        lt.append(i[3])
        wt.append(i[4])
        sal.append(i[5])
        do.append(i[6])
        ph.append(i[7])
        fv.append(i[8])
        ii.append(i[9])
    dict = {}
    dict['p'] = p
    dict['lt'] = lt
    dict['wt'] = wt
    dict['sal'] = sal
    dict['do'] = do
    dict['ph'] = ph
    dict['fv'] = fv
    dict['ii'] = ii
    # for i in dict.values():
    #     print(type(i[0]))
    lastData = dict_to_json(dict)
    # type(lastData)  <class 'str'>
    return lastData

# 这是最早开发的，采集一个养殖场的全部养殖数据，现在被弃用。
def taoData():
    db = pymysql.connect(host='localhost', user='root', passwd='root', db='db_sea', port=3306, charset='utf8')
    cur = db.cursor()  # 游标(指针)cursor的方式操作数据
    sql = f"select * from (select * from env where ad='桃花' order by id desc limit 10) aa ORDER BY id"  # sql语句
    # select {need_data} from (select * from env where ad='桃花' order by id desc limit 10) aa ORDER BY id
    # 原select {need_data} from env where ad='桃花'
    cur.execute(sql)  # execute(query, args):执行单条sql语句
    catch_data = cur.fetchall()
    cur.close()
    db.close()
    lt = []
    do = []
    ph = []
    wt = []
    sal = []
    chl = []
    td = []
    for i in catch_data:
        lt.append(i[1])
        do.append(i[2])
        ph.append(i[3])
        wt.append(i[4])
        sal.append(i[5])
        chl.append(i[6])
        td.append(i[7])
    dict = {}
    dict['lt'] = lt
    dict['do'] = do
    dict['ph'] = ph
    dict['wt'] = wt
    dict['sal'] = sal
    dict['chl'] = chl
    dict['td'] = td
    lastData = dict_to_json(dict)
    return lastData

# 每隔两秒插入一些随机数据，一定要通过执行app实现,需要插入再解除注释，不然每次执行app都会执行这个方法
# sched = BackgroundScheduler()
# sched.add_job(insertData, 'interval', seconds=2, id='my_job_id')
# sched.start()
if __name__ == '__main__':

    print(mainData())
    # print(taoData())
