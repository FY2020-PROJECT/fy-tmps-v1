import csv
import sys
import collections
import json

lis = []
with open(sys.argv[1]) as f:
    f_csv = csv.reader(f)
    for row in f_csv:
        cur = collections.OrderedDict()
        cur['name'] = row[1]
        cur['teacher'] = row[2]
        cur['mote'] = row[3]
        cur['pic_h'] = "staffs/" + row[0] + "_"
        lis.append(cur)
    print(json.dumps(lis, ensure_ascii=False))