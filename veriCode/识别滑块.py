#!/bin/env/python
# *_*coding:utf-8 *_*

import sys, os
import traceback

sys.path.append(os.path.abspath(os.path.join('..')))


import urllib3
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
import numpy
import numpy as np
import requests
import time

import aircv as ac

import base64
import json


import cv2

from PIL import Image

from io import BytesIO


def transPic(srcImgBase64):
    byte_data = base64.b64decode(srcImgBase64)
    image_data = BytesIO(byte_data)
    img = Image.open(image_data)


    # # 模式L”为灰色图像，它的每个像素用8个bit表示，0表示黑，255表示白，其他数字表示不同的灰度。
    Img = img.convert('L')
    # Img.save("test1.jpg")

    # 自定义灰度界限，大于这个值为黑色，小于这个值为白色
    threshold = 245

    table = []
    for i in range(256):
        if i < threshold:
            table.append(0)
        else:
            table.append(1)

    # 图片二值化
    image = Img.point(table, '1').convert("L")
    cv2img = cv2.cvtColor(numpy.asarray(image), cv2.COLOR_RGB2BGR)
    return cv2img


def checkFind(distSrc):
    file_base1 = 'iVBORw0KGgoAAAANSUhEUgAAAC8AAAAuCAQAAAAScoiCAAAACXBIWXMAAAsTAAALEwEAmpwYAAADGWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjaY2BgnuDo4uTKJMDAUFBUUuQe5BgZERmlwH6egY2BmYGBgYGBITG5uMAxIMCHgYGBIS8/L5UBA3y7xsDIwMDAcFnX0cXJlYE0wJpcUFTCwMBwgIGBwSgltTiZgYHhCwMDQ3p5SUEJAwNjDAMDg0hSdkEJAwNjAQMDg0h2SJAzAwNjCwMDE09JakUJAwMDg3N+QWVRZnpGiYKhpaWlgmNKflKqQnBlcUlqbrGCZ15yflFBflFiSWoKAwMD1A4GBgYGXpf8EgX3xMw8BUNTVQYqg4jIKAX08EGIIUByaVEZhMXIwMDAIMCgxeDHUMmwiuEBozRjFOM8xqdMhkwNTJeYNZgbme+y2LDMY2VmzWa9yubEtoldhX0mhwBHJycrZzMXM1cbNzf3RB4pnqW8xryH+IL5nvFXCwgJrBZ0E3wk1CisKHxYJF2UV3SrWJw4p/hWiRRJYcmjUhXSutJPZObIhsoJyp2V71HwUeRVvKA0RTlKRUnltepWtUZ1Pw1Zjbea+7QmaqfqWOsK6b7SO6I/36DGMMrI0ljS+LfJPdPDZivM+y0qLBOtfKwtbFRtRexY7L7aP3e47XjB6ZjzXpetruvdVrov9VjkudBrgfdCn8W+y/xW+a8P2Bq4N+hY8PmQW6HPwr5EMEUKRilFG8e4xUbF5cW3JMxO3Jx0Nvl5KlOaXLpNRlRmVdas7D059/KY8tULfAqLi2YXHy55WyZR7lJRWDmv6mz131q9uvj6SQ3HGn83G7Skt85ru94h2Ond1d59uJehz76/bsK+if8nO05pnXpiOu+M4JmzZj2aozW3ZN6+BVwLwxYtXvxxqcOyCcsfrjRe1br65lrddU3rb2402NSx+cFWq21Tt3/Y6btr1R6Oven7jh9QP9h56PURv6Obj4ufqD355LT3mS3nZM+3X/h0Ke7yqasW15bdEL3ZeuvrnfS7N+/7PDjwyPTx6qeKz2a+EHzZ9Zr5Td3bn+9LP3z6VPD53de8b+9+5P/88Lv4z7d/Vf//AwAqvx2K829RWwAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAAnElEQVR42uyXwQ7AIAhD+/8/zY7bUASxHLaAN2NejdoSAVmNZyEz1nAtRMPPYAkBf99HAnt4MPDiXHYhHo2n4seKOtldjazdg34+hLs+aXzjf4y3PEzB2x4+bdZOy3lNsCRuygBkCSTzfmv/VXg0PoCfOI0YFOq1i3BTSKUGLxxKMkcfbwFa+IlZGsjdDBv/NbxU4mefmf2yZK8BABpmKFfS00h0AAAAAElFTkSuQmCC'
    file_base2 = 'iVBORw0KGgoAAAANSUhEUgAAACoAAAArCAQAAACkltJ1AAAACXBIWXMAAAsTAAALEwEAmpwYAAADGWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjaY2BgnuDo4uTKJMDAUFBUUuQe5BgZERmlwH6egY2BmYGBgYGBITG5uMAxIMCHgYGBIS8/L5UBA3y7xsDIwMDAcFnX0cXJlYE0wJpcUFTCwMBwgIGBwSgltTiZgYHhCwMDQ3p5SUEJAwNjDAMDg0hSdkEJAwNjAQMDg0h2SJAzAwNjCwMDE09JakUJAwMDg3N+QWVRZnpGiYKhpaWlgmNKflKqQnBlcUlqbrGCZ15yflFBflFiSWoKAwMD1A4GBgYGXpf8EgX3xMw8BUNTVQYqg4jIKAX08EGIIUByaVEZhMXIwMDAIMCgxeDHUMmwiuEBozRjFOM8xqdMhkwNTJeYNZgbme+y2LDMY2VmzWa9yubEtoldhX0mhwBHJycrZzMXM1cbNzf3RB4pnqW8xryH+IL5nvFXCwgJrBZ0E3wk1CisKHxYJF2UV3SrWJw4p/hWiRRJYcmjUhXSutJPZObIhsoJyp2V71HwUeRVvKA0RTlKRUnltepWtUZ1Pw1Zjbea+7QmaqfqWOsK6b7SO6I/36DGMMrI0ljS+LfJPdPDZivM+y0qLBOtfKwtbFRtRexY7L7aP3e47XjB6ZjzXpetruvdVrov9VjkudBrgfdCn8W+y/xW+a8P2Bq4N+hY8PmQW6HPwr5EMEUKRilFG8e4xUbF5cW3JMxO3Jx0Nvl5KlOaXLpNRlRmVdas7D059/KY8tULfAqLi2YXHy55WyZR7lJRWDmv6mz131q9uvj6SQ3HGn83G7Skt85ru94h2Ond1d59uJehz76/bsK+if8nO05pnXpiOu+M4JmzZj2aozW3ZN6+BVwLwxYtXvxxqcOyCcsfrjRe1br65lrddU3rb2402NSx+cFWq21Tt3/Y6btr1R6Oven7jh9QP9h56PURv6Obj4ufqD355LT3mS3nZM+3X/h0Ke7yqasW15bdEL3ZeuvrnfS7N+/7PDjwyPTx6qeKz2a+EHzZ9Zr5Td3bn+9LP3z6VPD53de8b+9+5P/88Lv4z7d/Vf//AwAqvx2K829RWwAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAAz0lEQVR42uyWSw7EMAhDuf+lPauOko4BB5hN1WZXpU8umI8ZvAMAVjsREFUwRzb1xsgiNkN67x4LxTyUYTFtKZux1F0r5iqqgfwblD9rKOIbVFStE73QFypBNRceQXEwQhIoV5fWDMWEta9o+RXwBXd+kHdf1KHmprQFDb7zU9JxsLMzlZezC8rmEoKoxbbDav7dsWt2g4+dLUG2Nr8BOnvFJCEx/x4qMe/otj4ISSlA0VyGBmIqQzEPzZe04oxqQfNtaS9aYYqpTeKkwXwGADMV7nQ5KQzLAAAAAElFTkSuQmCC'

    simg1 = transPic(file_base1)
    simg2 = transPic(file_base2)
    # show(simg1)

    jig_x = None
    try:
        pos1 = ac.find_template(distSrc,simg1,threshold=0.6,rgb=True)
        # pos1 = cv2.matchTemplate(simg1, distSrc, cv2.TM_CCORR_NORMED)
        print(pos1)

        if pos1:
            p1_confidence = pos1['confidence']
            print("s1 ok!")
            jig_x = pos1["rectangle"][0][0]
    except:
        pass
    try:
        # pos2 = ac.find_template(s2,s2,threshold=0.1,rgb=True)
        pos2 = ac.find_template(distSrc, simg2, threshold=0.6, rgb=True)
        print(pos2)
        if pos2:
            print("s2 ok!")
            jig_x = pos2["rectangle"][0][0]
    except:
        print(traceback.format_exc())
        pass

    return jig_x



def show(name):
    '''展示圈出来的位置'''
    cv2.imshow('Show', name)
    cv2.waitKey(0)
    cv2.destroyAllWindows()

def _tran_canny(image):
    """消除噪声"""
    # image = cv2.GaussianBlur(image, (3, 3), 0)
    image = cv2.GaussianBlur(image, (3, 3), 0)

    return cv2.Canny(image, 40, 160)


def base64_to_image(base64_code,gray=True
                    ):
    """将base64的数据转换成rgb格式的图像矩阵"""
    try:
        img_data = base64.b64decode(base64_code)
        img_array = np.frombuffer(img_data, np.uint8)
        if gray:
            img = cv2.imdecode(img_array, cv2.IMREAD_GRAYSCALE)
        else:
            img = cv2.imdecode(img_array, cv2.IMREAD_COLOR)
        return img
    except:
        return None




def corp_margin(img):
    img2 = img.sum(axis=2)
    (row, col) = img2.shape
    row_top = 0
    raw_down = 0
    col_top = 0
    col_down = 0
    for r in range(0, row):
        if img2.sum(axis=1)[r] > 50 * col:
            row_top = r
            break

    for r in range(row - 1, 0, -1):
        if img2.sum(axis=1)[r] > 50 * col:
            raw_down = r
            break

    for c in range(0, col):
        if img2.sum(axis=0)[c] > 50 * row:
            col_top = c
            break

    for c in range(col - 1, 0, -1):
        if img2.sum(axis=0)[c] > 50 * row:
            col_down = c
            break

    new_img = img[row_top:raw_down + 1, col_top:col_down + 1, 0:3]
    return new_img


def detect_displacement_base64(img_slider, image_background,img_slider_path =None,image_background_path=None):
    """detect displacement"""

    jigImg = transPic(img_slider)
    # cv2.imwrite("jig.{}.png".format(time.time()),jigImg)
    template = transPic(image_background)
    image = corp_margin(jigImg)


    # 寻找最佳匹配
    res = cv2.matchTemplate(image, template, cv2.TM_CCORR_NORMED)

    # res = cv2.matchTemplate(_tran_canny(image), _tran_canny(template), cv2.TM_CCOEFF)
    # 最小值，最大值，并得到最小值, 最大值的索引
    min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(res)

    top_left = max_loc[0]  # 横坐标
    print("match {}".format(top_left))

    # pos = ac.find_template(_tran_canny(template1), _tran_canny(image1),threshold=0.1)
    pos = ac.find_template(template, image,threshold=0.6,rgb=True)
    print(pos)
    # print(pos['rectangle'])

    # # 展示圈出来的区域
    show_flag = False
    # show_flag = True
    if show_flag:
        x, y = max_loc  # 获取x,y位置坐标
        h,w = image.shape[:-1]  # 宽高
        cv2.rectangle(template, (x, y), (x + w, y + h), (7, 249, 151), 2)
        show(template)
    return (top_left,checkFind(jigImg))


def detect_displacement(img_slider_path, image_background_path):
    """detect displacement"""
    # # 参数0是灰度模式
    image = cv2.imread(img_slider_path, 0)
    template = cv2.imread(image_background_path, 0)

    # 寻找最佳匹配
    res = cv2.matchTemplate(_tran_canny(image), _tran_canny(template), cv2.TM_CCOEFF_NORMED)
    # 最小值，最大值，并得到最小值, 最大值的索引
    min_val, max_val, min_loc, max_loc = cv2.minMaxLoc(res)

    top_left = max_loc[0]  # 横坐标
    # 展示圈出来的区域
    # x, y = max_loc  # 获取x,y位置坐标
    #
    # w, h = image.shape[::-1]  # 宽高
    # cv2.rectangle(template, (x, y), (x + w, y + h), (7, 249, 151), 2)
    # show(template)
    return top_left



def checkTxt():
    txtDir = "/Users/tangyangyang/PycharmProjects/js-test/slice/checkImage/correct/"
    for txt in os.listdir(txtDir):
        print("-------------------")
        txtname = txt[:-4]
        with open(txtDir + txt,"rb") as f:
            res = f.read()
            # print(res)
        res = json.loads(res.strip())
        jigSaw = res["repData"]["jigsawImageBase64"]
        backImg = res["repData"]["originalImageBase64"]
        with open("back_{}.png".format(txtname),"wb") as f:
            f.write(base64.b64decode(backImg))
        with open("jig_{}.png".format(txtname),"wb") as f:
            f.write(base64.b64decode(jigSaw))

        # top_left1 = detect_displacement("jig.png", "back.png")
        # print(top_left1)

        top_left2,jig_x = detect_displacement_base64(jigSaw, backImg)
        if jig_x:
            top_left2 = (top_left2 - jig_x)
        top_left2 = top_left2 / 1997 *1994

        print("ok:{} orc:{}".format(txtname,top_left2))



        x_url = "http://monitor.taxservices.cn/opserver/getX"
        param ={"jig":jigSaw,"back":backImg}
        # print(param)
        msg = requests.post(x_url,data=param)
        print(msg.text)

        print("ok:{} orc:{}".format(txtname,msg.text))

if __name__ == '__main__':
    checkTxt()
    for i in range(0):
        net = True
        # net = False


        res = """


"""

        if net:
            url = 'http://pjcy.mof.gov.cn/billcheck/captcha/get'
            header = { "Referer":"http://pjcy.mof.gov.cn/",
                       "User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36",
                       "X-Requested-With": "XMLHttpRequest",
                       "Content-Type": "application/json;charset=UTF-8",
                       "Cookie": "Path=/; JSESSIONID=j66GMdXo04adTHBR1s5QTOKbnA5G-Obyl7Mm-NAVcw0btS1_gpmy!-1734812997"
            }
            payload = {"captchaType": "blockPuzzle", "clientUid": "slider-9d2b8539-1e62-4a0c-9db2-997fdf25ad61","ts": int(time.time())}
            res = requests.post(url,headers=header,json=payload).json()
        else:
            # print(res)
            res = json.loads(res.strip())

        jigSaw = res["repData"]["jigsawImageBase64"]
        backImg = res["repData"]["originalImageBase64"]
        err_dir = "../err_mage/"
        ok_dir = "../ok_mage/"
        file_dir = ok_dir
        with open(file_dir + "back_{}.png".format(time.time()),"wb") as f:
            f.write(base64.b64decode(backImg))
        with open(file_dir + "jig_{}.png".format(time.time()),"wb") as f:
            f.write(base64.b64decode(jigSaw))


        # top_left1 = detect_displacement("jig.png", "back.png")
        # print(top_left1)

        top_left2 = detect_displacement_base64(jigSaw, backImg)


        print(top_left2 /1997 *1998)
        # x_url = "http://monitor.taxservices.cn/opserver/getX"
        # param ={"jig":jigSaw,"back":backImg}
        # # print(param)
        # msg = requests.post(x_url,data=param)
        # print(msg.text)

